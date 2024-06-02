export default function ProductItem() {
  return (
    <div className="border shadow-lg rounded-t-lg">
      <img
        src="https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png"
        alt=""
        className="rounded-t-lg"
      />
      <div className="flex flex-row-reverse justify-between p-4">
        <h3 className="font-semibold text-lg">عنوان محصول</h3>
        <p className="font-semibold text-lg">55</p>
      </div>
      <div className="p-4 pt-0">
        <p className="line-clamp-2 text-right">
          توضیحات محصول درجه 1 مناسب برای تمامی سنین ساخت کشور چین توضیحات محصول
          درجه 1 مناسب برای تمامی سنین ساخت کشور چین
        </p>
      </div>
    </div>
  );
}
