import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Button from "../../components/Button";

export default function Product() {
  const params = useParams();

  return (
    <div>
      <Container>
        <div className="mt-10 grid grid-cols-12">
          <div className="bg-gray-100/70 col-span-9 text-right p-4 space-y-4">
            <h1 className="font-bold">عنوان محصول</h1>
            <p>قیمت: 25 دلار</p>
            <p>
              انیبا نما لنمتیا لنتیبا تنیابل عهع ابثحخ عثا ثختصخف هعشصثخلاشثقفل
              خال تسخهالت بیخهلات یبکله اتسیبخهلات یخلیات خهیبسا
            </p>
            <div>
              <Button variant="primary">
                افزودن به سبد خرید
              </Button>
            </div>
          </div>
          <div className="col-span-3">
            <img
              src="https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png"
              alt=""
              className="w-92"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
