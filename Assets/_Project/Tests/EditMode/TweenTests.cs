using NUnit.Framework;
using UnityEngine;

namespace Playable.Tests
{
    /// <summary>The tween helper's timeline, stepped by hand: no runner in edit mode.</summary>
    public class TweenTests
    {
        private GameObject go;

        [SetUp]
        public void Make() => go = new GameObject("Tween test");

        [TearDown]
        public void Clean()
        {
            if (go != null) Object.DestroyImmediate(go);
            Tween.Advance(0f); // tweens of the destroyed object end
        }

        [Test]
        public void WaitsItsDelay_EasesThere_CallsBackOnce()
        {
            int done = 0;
            Tween.Move(go.transform, new Vector3(2f, 0f, 0f), 1f, Ease.InQuad, 0.5f, () => done++);
            Tween.Advance(0.25f);
            Assert.AreEqual(0f, go.transform.localPosition.x, 1e-4f, "сдвинулся во время задержки");
            Tween.Advance(0.75f); // half way through: InQuad gives a quarter of the way
            Assert.AreEqual(0.5f, go.transform.localPosition.x, 1e-4f);
            Assert.AreEqual(0, done, "колбэк до конца");
            Tween.Advance(0.6f);
            Assert.AreEqual(2f, go.transform.localPosition.x, 1e-4f, "не дошёл до цели");
            Tween.Advance(1f);
            Assert.AreEqual(1, done, "колбэк должен прийти ровно один раз");
        }

        [Test]
        public void EasesStartAtZeroAndEndAtOne()
        {
            foreach (Ease ease in new[] { Ease.Linear, Ease.InQuad, Ease.OutQuad, Ease.InOutQuad })
            {
                Assert.AreEqual(0f, Tween.Eased(ease, 0f), 1e-6f, ease.ToString());
                Assert.AreEqual(1f, Tween.Eased(ease, 1f), 1e-6f, ease.ToString());
            }
            Assert.AreEqual(0.75f, Tween.Eased(Ease.OutQuad, 0.5f), 1e-6f);
            Assert.AreEqual(0.5f, Tween.Eased(Ease.InOutQuad, 0.5f), 1e-6f);
        }

        [Test]
        public void ANewerTweenTakesItsChannel_OtherChannelsRunOn()
        {
            bool firstDone = false;
            Tween.Scale(go.transform, Vector3.one * 3f, 1f, Ease.Linear, 0f, () => firstDone = true);
            Tween.Move(go.transform, Vector3.up, 1f, Ease.Linear);
            Tween.Advance(0.5f);
            Assert.AreEqual(2f, go.transform.localScale.x, 1e-4f);
            Tween.Scale(go.transform, Vector3.zero, 1f, Ease.Linear);
            Tween.Advance(1f);
            Assert.AreEqual(0f, go.transform.localScale.x, 1e-4f, "старый Scale перебил новый");
            Assert.IsFalse(firstDone, "заменённый твин не должен звать колбэк");
            Assert.AreEqual(1f, go.transform.localPosition.y, 1e-4f, "Move на том же transform остановился");
        }

        [Test]
        public void ADestroyedTargetEndsItsTweensSilently()
        {
            bool done = false;
            Tween.Move(go.transform, Vector3.one, 1f, Ease.Linear, 0f, () => done = true);
            Tween.Delay(go, 0.5f, () => done = true);
            Object.DestroyImmediate(go);
            Assert.DoesNotThrow(() => Tween.Advance(2f));
            Assert.IsFalse(done);
        }

        [Test]
        public void DelayCallsBackAfterItsTime()
        {
            int calls = 0;
            Tween.Delay(go, 0.5f, () => calls++);
            Tween.Advance(0.4f);
            Assert.AreEqual(0, calls);
            Tween.Advance(0.2f);
            Assert.AreEqual(1, calls);
        }
    }
}
