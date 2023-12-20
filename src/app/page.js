"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const changeHandler = (e) => {
    setInputVal(e?.target?.value);
  };

  const options = {
    method: "POST",
    url: "http://ec2-34-206-43-97.compute-1.amazonaws.com:3000/tiktok",
    headers: { "Content-Type": "application/json" },
    data: { url: "https://www.tiktok.com/@hamzaig1/video/7279491364922920200" },
  };

  const onSubmit = async () => {
    // const res = await axios.post(
    //   "http://ec2-34-206-43-97.compute-1.amazonaws.com:3000/tiktok",
    //   {
    //     url: inputVal,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    const videoLink =
      "https://v16m-default.akamaized.net/6e4a7a966c056ef9d093b2cbbae37d34/658338b6/video/tos/alisg/sde/tos-alisg-pv-0037c001/owXFIvWCyEqACAAI8AgfDAlhEgzAcVAZawtZrO/?a=0&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C1&cv=1&br=7448&bt=3724&bti=OUBzOTg7QGo6OjZAL3AjLTAzYCMxNDNg&ds=3&ft=iJOG.y7oZzv0PD1tmPtxg9wk.-MrBEeC~&mime_type=video_mp4&qs=13&rc=M3E0Njs6Zmd5bjMzODczNEBpM3E0Njs6Zmd5bjMzODczNEBfZmhicjRfMi9gLS1kMTFzYSNfZmhicjRfMi9gLS1kMTFzcw%3D%3D&l=202312201255354202C0642648F6198643&btag=e00048000&dpk=eSSr25sVvWSy28%2F4ZDh31%2FyuS9QFhWHXgsHPqXTL7gYuEdFHlntECO0bnUM5Y3EJX5mVYtQK1X37%2BVCiIcYEMljz993BI51Z8lZjpQ%3D%3D&dpm=aes-256-cfb&l=202312201255354202C0642648F6198643";
    const videoBlob = new Blob([videoLink], { type: "video/mp4" });

    const anchor = document.createElement("a");
    anchor.href = window.URL.createObjectURL(videoBlob);
    anchor.download = "video.mp4";

    anchor.click();
  };
  return (
    <div className="main-container">
      {/* <!--First Section Div--> */}
      <div className="first-sec">
        <nav className="navbar">
          <div className="logo"> </div>
          <ul className="list-item">
            <li>Information</li>
            <li>How To Use</li>
          </ul>
          <div className="btn-exntn">
            <span>Chrome Extention</span>
          </div>
        </nav>
        <div className="first-sec-hed">
          <h3>TikTok Video Downloader</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Orci tincidunt justo
            tincidunt ante elit. Quam arcu phasellus amet id amet duis. Iaculis
            ele
          </p>
          <div className="search-dwnld">
            <input
              type="text"
              placeholder="past video URL from TikTok"
              onChange={changeHandler}
            />
            <button onClick={onSubmit}>
              Download
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMNJREFUSEvtlbENwjAQRV8KVqBEoqJKT8UKbAEzMAIjkEEyQCpqsgC0rEAB+pIjBSsmZ6wIoeQaK/L5v/vns5IxcGQD6zM+wNO11OzcnOiEJ0Dv0I68RSH7J2AXaF4B7L29N532mIYAM6AC1p7QGdgAj1SAzs+B2q36vgO5W31z0Q4aATmQE4Uql4Ou+BogseYu1PtQJAF6HwrwO8ANWFhKNORcgaXy2mO6BY7AyiDwKeUCHIDSByTqdh+P/R9EF/H/gBdz+CUZeOsyDwAAAABJRU5ErkJggg==" />
            </button>
          </div>
        </div>
        <div className="angle-tik"> </div>
      </div>
      {/* <!-- Second Section Cards Div --> */}
      <div className="secd-sec">
        <div className="cards">
          <div className="card">
            <img src="assets/card_1_img.png" alt="" />
            <p>Find Videos</p>
            <span>
              Copy the Tiktok video URL by clicking Share and choosing copy link
            </span>
          </div>
          <div className="card">
            <img src="assets/card_2_img.png" alt="" />
            <p>Past Video</p>
            <span>
              Paste the TikTok video URL in the box above and hit the download
              button.
            </span>
          </div>
          <div className="card">
            <img src="assets/card_3_img.png" alt="" />
            <p>Download Videos</p>
            <span>
              Clicking Download Without watermark to download video mp4 without
              watermark.
            </span>
          </div>
        </div>
      </div>
      {/* <!-- Third Section --> */}
      <div className="third-sec">
        <p>TikTok Video Downloader</p>
        <span>
          Lorem ipsum dolor sit amet consectetur. Porttitor tempus eget id
          curabitur massa. Blandit gravida imperdiet turpis nibh vivamus. Arcu
          sed ac eget sit dolor parturient eget vitae. A porttitor natoque proin
          aliquet ullamcorper. Eget at cras lorem lacus commodo ut. Nascetur
          elementum ridiculus sit morbi rhoncus mauris cras ut. Porta gravida
          tincidunt fusce dictum quam massa sem fusce risus. Condimentum quis
          nisl quisque risus egestas. Felis posuere natoque hac massa. Sem urna
          ut in rhoncus faucibus.
        </span>
        <div className="vactor">
          <img
            className="vactor-firstImg"
            src="assets/third-sec-img1.svg"
            alt=""
          />
          <img
            className="vactor-firstImg2"
            src="assets/third-sec-img2.svg"
            alt=""
          />
          <img
            className="vactor-firstImg3"
            src="assets/third=sec-img3.svg"
            alt=""
          />
          <img
            className="vactor-firstImg4"
            src="assets/third-sec-img4.svg"
            alt=""
          />
          <div className="sit"></div>
        </div>
      </div>

      {/* <!--4th Section Fetures  --> */}
      <div className="forth-sec">
        <div className="img-sec">
          <img className="shuilt-img" src="assets/shuilt-img.svg" alt="" />
          <img
            class="shuilt-face-img"
            src="assets/shuilt-face-img.svg"
            alt=""
          />
          <img class="hand" src="assets/hand-img.svg" alt="" />
        </div>
        <div class="content-featu">
          <p class="head"> Features</p>
          <div class="peragrap">
            <li>
              {" "}
              <div class="circle"></div>
              TikTok Downloader to download video TikTok{" "}
              <span>No Watermark.</span>
            </li>
            <li>
              <div class="circle"></div>
              Download video TikTok using <span>your browser only.</span> No
              other tools needed.
            </li>
            <li>
              <div class="circle"></div>Download video TikTok
              <span>No Watermark </span>with<span> Full HD quality.</span>
            </li>
            <li>
              <div class="circle"></div>
              Support Tik Tok Downloader,<span> Musically Downloader, </span>and
              <span> Douyin (Chinese TikTok)</span>Downloader.
            </li>
          </div>
        </div>
      </div>

      {/* <!-- Faq Section --> */}
      <div class="five-sec" style={{ margin: "0px 30px" }}>
        <div class="head">
          <h2> Frequently Ask Question</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Porttitor tempus eget id
            curabitur massa. Blandit gravida imperdiet turpis nibh vivamus.
          </p>
        </div>
        <div class="frame">
          <div class="frst-q">
            <h2>
              Why does this tiktok Download say that I can,t download this
              video?
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Porttitor tempus eget id
              curabitur massa. Blandit gravida imperdiet turpis nibh vivamus.
              Arcu sed ac eget sit dolor parturient eget vitae. A porttitor
              natoque proin aliquet ullamcorper. Eget at cras lorem lacus
              commodo ut. Nascetur elementum ridiculus sit morbi rhoncus mauris
              cras ut. Porta gravida tincidunt fusce dictum quam massa sem fusce
              risus. Condimentum quis nisl quisque risus egestas. Felis posuere
              natoque hac massa. Sem urna ut in rhoncus faucibus.
            </p>
          </div>
          <div class="cros-box">
            <div class="line"></div>
            <div class="line2"></div>
          </div>
        </div>

        <div class="cards-feq">
          <div class="card">
            <p class="faqQ">How to get your Tiktok downlaod Link?</p>
            <div class="card-lines">
              <div class="line"> </div>
              <div class="line2"> </div>
            </div>
          </div>
          <p class="faqAns">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur at fuga exercitationem ipsam inventore. Obcaecati, quas?
            Fugit ut dolore non numquam natus quam, itaque in. Ipsum debitis
            aliquam quas. Asperiores.
          </p>
          <div class="card">
            <p class="faqQ">How to get your Tiktok downlaod Link?</p>
            <div class="card-lines">
              <div class="line"> </div>
              <div class="line2"> </div>
            </div>
          </div>
          <p class="faqAns">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur at fuga exercitationem ipsam inventore. Obcaecati, quas?
            Fugit ut dolore non numquam natus quam, itaque in. Ipsum debitis
            aliquam quas. Asperiores.
          </p>
          <div class="card">
            <p class="faqQ">How to get your Tiktok downlaod Link?</p>
            <div class="card-lines">
              <div class="line"> </div>
              <div class="line2"> </div>
            </div>
          </div>
          <p class="faqAns">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur at fuga exercitationem ipsam inventore. Obcaecati, quas?
            Fugit ut dolore non numquam natus quam, itaque in. Ipsum debitis
            aliquam quas. Asperiores.
          </p>
          <div class="card">
            <p class="faqQ">How to get your Tiktok downlaod Link?</p>
            <div class="card-lines">
              <div class="line"> </div>
              <div class="line2"> </div>
            </div>
          </div>
          <p class="faqAns">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur at fuga exercitationem ipsam inventore. Obcaecati, quas?
            Fugit ut dolore non numquam natus quam, itaque in. Ipsum debitis
            aliquam quas. Asperiores.
          </p>
        </div>
      </div>

      <footer>
        <div class="footer1">
          <div class="fot-content">
            <p class="foot-logo">Logo Here</p>
            <span>
              Lorem ipsum dolor sit amet consectetur. Porttitor tempus eget id
              curabitur massa. Blandit gravida imperdiet.
            </span>
          </div>

          <div class="links">
            <ul>
              <p>Quick Links</p>
              <li>How To Use</li>
              <li>Information</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <p>Other Links</p>
              <li>Twitter Video Download</li>
              <li>Pinterest Video Downloader</li>
              <li>Insta Video Downloader</li>
              <li>Youtube Video Downloader</li>
            </ul>
          </div>
        </div>

        <div class="line"> </div>
        <div class="footer2">
          <p>© LogoName 2023. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
