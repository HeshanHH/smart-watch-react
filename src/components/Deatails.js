import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "../App.css";
import "./Details.css";
import Dtailimg01 from "../image/powe.png";
import Dtailimg02 from "../image/voice massae.png";

function Deatails() {
  return (
    <div>
      <div id="details" className="basic-2">
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <img src={Dtailimg01} className="img-fluid" alt="detail" />
            </div>
            <div className="col-lg-6">
              <div className="text-container">
                <h3 data-aos="fade-up">Power Reservation</h3>
                <br /> <br />
                <p data-aos="fade-up">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores rerum illo, temporibus sunt debitis ut quod quia culpa
                  voluptas molestiae possimus deleniti repellendus aspernatur
                  quae saepe asperiores itaque atque odit sequi eos minima
                  magnam impedit. Cupiditate, inventore! Quos perferendis iste
                  quo incidunt eius veniam cum asperiores inventore atque itaque
                  labore ipsa accusamus laudantium ipsam nam quisquam minus
                  rerum deserunt, sequi, ex nemo vel, minima quod molestiae.
                  Commodi error, reiciendis placeat incidunt repudiandae eaque?
                  Pariatur culpa dolorum exercitationem quia mollitia eum!
                  Officiis ut illum minus neque vero. Aspernatur officia
                  architecto non ducimus eveniet reprehenderit recusandae libero
                  quidem facere corporis magnam deleniti dolorem vero hic, illum
                  eius sequi omnis nobis voluptates. Dolor aspernatur excepturi
                  esse. Ipsa necessitatibus iure qui iusto quidem earum nisi
                  aliquid nihil ipsam quisquam nam, nostrum blanditiis at velit
                  quos iste eveniet fugiat cum non nobis laborum commodi.
                  Cupiditate, mollitia autem enim recusandae minima nostrum a
                  soluta odio architecto unde quis laborum qui nobis quae,
                  asperiores atque similique iusto quidem minus excepturi
                  veritatis ut quod officia. Excepturi provident sunt dicta
                  voluptas libero, deleniti quasi minima porro, quo nihil cum
                  commodi assumenda odit soluta distinctio eveniet! Deleniti
                  nemo unde quibusdam voluptatum nostrum quos minus fugit veniam
                  animi aperiam velit, fugiat debitis id culpa accusantium, aut
                  veritatis facere minima blanditiis. Ab quibusdam a, impedit
                  libero velit laborum deleniti rerum incidunt ea non nesciunt
                  soluta ipsa quis molestias accusamus maiores? Quidem, deleniti
                  maxime? Sint velit ratione fugit provident rerum? Magnam,
                  omnis quos iure fugiat dolores nemo sit architecto mollitia
                  commodi cupiditate temporibus quisquam aperiam ratione
                  recusandae consectetur dolorem, iusto laborum? Odit quaerat
                  eligendi officia expedita id ad architecto libero ex harum,
                  consequuntur sint nobis asperiores minima est saepe impedit,
                  veniam praesentium recusandae repellat quibusdam deserunt
                  dolorum minus? Modi illo enim quia alias doloribus, dicta unde
                  consequatur quaerat in at porro amet fuga.
                </p>
                <br />
                <br />
                <a
                  href="#details-lightbox-1"
                  className="btn-solid-reg anim"
                  data-aos="fade-up"
                >
                  {" "}
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br />
      <div className="basic-3">
        <div className="second">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-container">
                  <h3 data-aos="fade-up">Voice Messages</h3>
                  <br /> <br />
                  <p data-aos="fade-up">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                    minus, distinctio ipsum repudiandae veniam deserunt
                    assumenda necessitatibus maiores, nam cupiditate
                    reprehenderit officiis, libero iure id quo ea quia delectus
                    fuga doloremque. Iste ducimus dolore dolorum quo voluptas
                    temporibus laborum molestiae. Veritatis ab magnam dolores
                    nesciunt molestias suscipit, odit labore sequi sint
                    voluptatem eligendi praesentium quod aliquid incidunt facere
                    in placeat. Sint, sit delectus mollitia est soluta quibusdam
                    laudantium dolores quaerat. Sit voluptates debitis ab
                    molestiae vitae porro officia dicta sequi dolorem suscipit.
                    Est vero corporis dolor blanditiis modi fugit voluptates
                    perspiciatis ad officiis architecto error delectus unde,
                    amet dolore laborum.
                  </p>
                  <br />
                  <br />
                  <a
                    href="#details-lightbox-1"
                    className="btn-solid-reg anime"
                    data-aos="fade-up"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <img src={Dtailimg02} alt="watch 2" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br />
    </div>
  );
}

export default Deatails;
