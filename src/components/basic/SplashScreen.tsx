import ImageWrapper from "./ImageWrapper";

export default function SplashScreen() {
  //초기 폰트사이즈 설정
  const fontSize = localStorage.getItem("fontSize");
  if (!fontSize) localStorage.setItem("fontSize", "45");
  document.documentElement.style.setProperty(
    "--font-size-45",
    `${fontSize || 45}px`
  );

  return (
    <div className="splash-screen text-Bold30 animate-fade">
      <ImageWrapper className="min-w-[3.1875rem]">
        <img
          className=""
          alt="스플래시 화분"
          src="/icons/vase/splashIcon.png"
        />
      </ImageWrapper>
      스마트 화분 시스템
    </div>
  );
}
