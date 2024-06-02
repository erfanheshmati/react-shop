import { useParams } from "react-router-dom";
import Container from "../../components/Container";

export default function Product() {
  const params = useParams();

  return (
    <div>
      <Container>
        <div className="mt-10 grid grid-cols-12">
          <div className="bg-gray-100/70 col-span-10 text-right p-4">
            <h1 className="font-bold">عنوان محصول</h1>
            <p>قیمت: 25 دلار</p>
            <p>
              انیبا نما لنمتیا لنتیبا تنیابل عهع ابثحخ عثا ثختصخف هعشصثخلاشثقفل
              خال تسخهالت بیخهلات یبکله اتسیبخهلات یخلیات خهیبسا
            </p>
            <div>
              <button>افزودن به سبد خرید</button>
            </div>
          </div>
          <div className="col-span-2">
            <img
              src="https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png"
              alt=""
              className="w-72"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
