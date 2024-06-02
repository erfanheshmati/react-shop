import Button from "./Button";

export default function CartItem() {
  return (
    <div className="flex flex-row-reverse bg-gray-100/70">
      <img
        src="https://assets.turbologo.com/blog/en/2021/09/10093610/photo-camera-958x575.png"
        alt=""
        className="rounded w-44"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-right font-bold">عنوان محصول</h3>
        <div className="flex flex-row-reverse items-center">
          <Button variant="primary">+</Button>
          <span className="px-2">2</span>
          <Button variant="primary">-</Button>
          <Button variant="danger" className="mr-3">حذف</Button>
        </div>
      </div>
    </div>
  );
}
