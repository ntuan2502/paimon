import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexFooter from "../components/Footers/IndexFooter.js";
import Head from "next/head";

const Index = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Genshin Impact</title>
        <meta
          itemProp="name"
          content="Genshin Impact - Đi vào thế giới thần kỳ đầy mạo hiểm."
        />
        <meta
          itemProp="description"
          content="Genshin Impact là trò chơi thế giới mở đầu tiên của miHoYo, Teyvat là một thế giới giả lập, nơi tụ hợp của tín ngưỡng bảy vị thần nguyên tố.Tai họa phủ khắp đại lục cuối cùng đã dừng lại và mọi thứ dần ổn định, nhưng hòa bình lại không đến với thành Mondstadt như đã hẹn. Tổ chức Fatui ngang ngược hống hách mượn danh nghĩa bảo vệ để áp bức các nước. Nhà Lữ Hành, hãy cùng Paimon mở ra cuộc mạo hiểm của chính mình trong thế giới rộng lớn này!"
        />
        <meta
          itemProp="image"
          content="http://webstatic-sea.mihoyo.com/hk4e/upload/fb/en.jpg"
        />

        <meta
          itemProp="name"
          content="Genshin Impact - Đi vào thế giới thần kỳ đầy mạo hiểm."
        />
        <meta
          itemProp="description"
          content="Genshin Impact là trò chơi thế giới mở đầu tiên của miHoYo, Teyvat là một thế giới giả lập, nơi tụ hợp của tín ngưỡng bảy vị thần nguyên tố.Tai họa phủ khắp đại lục cuối cùng đã dừng lại và mọi thứ dần ổn định, nhưng hòa bình lại không đến với thành Mondstadt như đã hẹn. Tổ chức Fatui ngang ngược hống hách mượn danh nghĩa bảo vệ để áp bức các nước. Nhà Lữ Hành, hãy cùng Paimon mở ra cuộc mạo hiểm của chính mình trong thế giới rộng lớn này!"
        />
        <meta
          itemProp="image"
          content="http://webstatic-sea.mihoyo.com/hk4e/upload/fb/en.jpg"
        />

        <meta property="og:url" content="https://paimon.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Genshin Impact - Đi vào thế giới thần kỳ đầy mạo hiểm."
        />
        <meta
          property="og:description"
          content="Genshin Impact là trò chơi thế giới mở đầu tiên của miHoYo, Teyvat là một thế giới giả lập, nơi tụ hợp của tín ngưỡng bảy vị thần nguyên tố.Tai họa phủ khắp đại lục cuối cùng đã dừng lại và mọi thứ dần ổn định, nhưng hòa bình lại không đến với thành Mondstadt như đã hẹn. Tổ chức Fatui ngang ngược hống hách mượn danh nghĩa bảo vệ để áp bức các nước. Nhà Lữ Hành, hãy cùng Paimon mở ra cuộc mạo hiểm của chính mình trong thế giới rộng lớn này!"
        />
        <meta
          property="og:image"
          content="http://webstatic-sea.mihoyo.com/hk4e/upload/fb/en.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Genshin Impact - Đi vào thế giới thần kỳ đầy mạo hiểm."
        />
        <meta
          name="twitter:description"
          content="Genshin Impact là trò chơi thế giới mở đầu tiên của miHoYo, Teyvat là một thế giới giả lập, nơi tụ hợp của tín ngưỡng bảy vị thần nguyên tố.Tai họa phủ khắp đại lục cuối cùng đã dừng lại và mọi thứ dần ổn định, nhưng hòa bình lại không đến với thành Mondstadt như đã hẹn. Tổ chức Fatui ngang ngược hống hách mượn danh nghĩa bảo vệ để áp bức các nước. Nhà Lữ Hành, hãy cùng Paimon mở ra cuộc mạo hiểm của chính mình trong thế giới rộng lớn này!"
        />
        <meta
          name="twitter:image"
          content="http://webstatic-sea.mihoyo.com/hk4e/upload/fb/en.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexNavbar />
      <div className="select-none py-16 pb-24 md:pb-20">{children}</div>
      <IndexFooter />
    </div>
  );
};

export default Index;
