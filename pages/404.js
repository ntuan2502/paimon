import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  return (
    <section className="page_404 text-center">
      <h1 className="text-8xl">404</h1>
      <div className="four_zero_four_bg bg-no-repeat"></div>

      <div className="contant_box_404 text-xl font-bold">
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not avaible!</p>

        <a onClick={() => router.back()} className="link_404 cursor-pointer">
          Go back
        </a>
      </div>
    </section>
  );
}
