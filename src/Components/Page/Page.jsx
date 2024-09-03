import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="grid gap-5 mt-10 lg:grid-cols-4 md:grid-cols-2">
      <Link to="/shop">
        <div className="w-full shadow-xl h-96 card bg-base-100">
          <figure className="">
            <img
              src="https://demo-morata.myshopify.com/cdn/shop/files/25_f1e8bff8-1979-4dcc-8799-6dcf93d0aa3a.jpg?v=1701155168&width=1100"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="font-bold hover:text-[#FABC3F]">Clothing & Apparel</h2>
          </div>
        </div>
      </Link>
      <Link to="/shop/computer">
      <div className="w-full shadow-xl h-96 card bg-base-100">
          <figure className="">
            <img
              src="https://demo-morata.myshopify.com/cdn/shop/products/products_19_1.jpg?v=1697644756&width=1100"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="font-bold hover:text-[#FABC3F]">Computers & Technologies</h2>
          </div>
        </div>
      </Link>
      <Link to="/shop/consumer">
      <div className="w-full shadow-xl h-96 card bg-base-100">
          <figure className="">
            <img
              src="https://demo-morata.myshopify.com/cdn/shop/files/22.jpg?v=1700297236&width=1100"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="font-bold hover:text-[#FABC3F]">Consumer Electrics</h2>
          </div>
        </div>
      </Link>
      <Link to="/shop/decor">
      <div className="w-full shadow-xl h-96 card bg-base-100">
          <figure className="">
            <img
              src="https://demo-morata.myshopify.com/cdn/shop/products/furniture_products_3_8.jpg?v=1697644848&width=1100"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="font-bold hover:text-[#FABC3F]">Decor & Furniture</h2>
          </div>
        </div>
      </Link>
      <Link to="/shop/furniture">
      <div className="w-full shadow-xl h-96 card bg-base-100">
          <figure className="">
            <img
              src="https://demo-morata.myshopify.com/cdn/shop/files/image-product-9.jpg?v=1702546860&width=1100"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="font-bold hover:text-[#FABC3F]">Furniture & Acessories</h2>
          </div>
        </div>
      </Link>
      <Link to="/shop/kitchen">
      <div className="w-full shadow-xl h-96 card bg-base-100">
          <figure className="">
            <img
              src="https://demo-morata.myshopify.com/cdn/shop/products/19.jpg?v=1697644983&width=1100"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="font-bold hover:text-[#FABC3F]">Kitchen & Tableware</h2>
          </div>
        </div>
      </Link>
      <Link to="/shop/phone">
      <div className="w-full shadow-xl h-96 card bg-base-100">
          <figure className="">
            <img
              src="https://demo-morata.myshopify.com/cdn/shop/products/products_34_4.jpg?v=1697644904&width=1100"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="font-bold hover:text-[#FABC3F]">Phones & Accessories</h2>
          </div>
        </div>
      </Link>
      <div>
      <div className="w-full shadow-xl h-96 card bg-base-100">
          <figure className="">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="items-center text-center card-body">
            <h2 className="font-bold hover:text-[#FABC3F]">Shoes!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
