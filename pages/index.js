import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Genshin Impact</title>
        <meta
          itemprop="name"
          content="Genshin Impact - Đi vào thế giới thần kỳ đầy mạo hiểm."
        />
        <meta
          itemprop="description"
          content="Genshin Impact là trò chơi thế giới mở đầu tiên của miHoYo, Teyvat là một thế giới giả lập, nơi tụ hợp của tín ngưỡng bảy vị thần nguyên tố.Tai họa phủ khắp đại lục cuối cùng đã dừng lại và mọi thứ dần ổn định, nhưng hòa bình lại không đến với thành Mondstadt như đã hẹn. Tổ chức Fatui ngang ngược hống hách mượn danh nghĩa bảo vệ để áp bức các nước. Nhà Lữ Hành, hãy cùng Paimon mở ra cuộc mạo hiểm của chính mình trong thế giới rộng lớn này!"
        />
        <meta
          itemprop="image"
          content="https://uploadstatic-sea.mihoyo.com/contentweb/20210510/2021051011580166452.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-w-full min-h-screen">
        <img src="/img/background/index.jpg" alt="" />
      </div>
    </div>
  );
}
