import React, { useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DecorProduct from './DecorProduct/DecorProduct';

const Decor = () => {
    const data = useLoaderData();
  // console.log(data)
  const searchRef = useRef();
  const [searchProduct, setSearchProduct] = useState(data);
  const handleSerch = (e) => {
    console.log(searchRef.current.value);
    const search = data.filter((e, idx) =>
      e.name.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setSearchProduct([...search]);
    if (searchRef.current.value < 1) {
      search([...data]);
    }
  };

  //  const sortArray = datas.sort((a, b) => b.mark - a.mark)
  //  setAssignmentAssay([...sortArray])

  const handleShort = (filter) => {
    if (filter === "all") {
      setSearchProduct([...data]);
    }
    if (filter === "high") {
      const sortArray = data.sort((a, b) => b.current_price - a.current_price);
      setSearchProduct([...sortArray]);
    }
    if (filter === "low") {
      const sortArray = data.sort((a, b) => a.current_price - b.current_price);
      setSearchProduct([...sortArray]);
    }
  };

  const handleFilter = (e) => {
    if (e === "all") {
        setSearchProduct(data);
    } else if (e === "Stock") {
      const Stock = data.filter((food) => food.availability === "In Stock");
      setSearchProduct(Stock);
    } else if (e === "limited") {
      const LimitedStok = data.filter(
        (pro) => pro.availability === "Limited Stock"
      );
      setSearchProduct(LimitedStok);
    }
  };

  const Stock = data.filter((food) => food.availability === "In Stock");
  const LimitedStok = data.filter(
    (pro) => pro.availability === "Limited Stock"
  );

    return (
        <div className="relative ">
        <section className="justify-between md:flex">
          <div className="w-[80%]">
            <input
              ref={searchRef}
              placeholder="Type Product Name"
              className="border-2 px-3 rounded-lg h-12 md:w-[60%] border-[#FABC3F]"
              type="text"
            />
            <button onClick={handleSerch} className="mt-3 md:ml-5 Button">
              Click Here
            </button>
          </div>
          <div className="md:w-[20%]">
            <details className="dropdown">
              <summary className="mt-3 cursor-pointer Button">Sort by : </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                <li onClick={() => handleShort("all")}>
                  <a>Default</a>
                </li>
                <li onClick={() => handleShort("high")}>
                  <a>High To LOw</a>
                </li>
                <li onClick={() => handleShort("low")}>
                  <a>Low TO High</a>
                </li>
              </ul>
            </details>
          </div>
        </section>
        <section className="grid gap-3 mt-10 lg:grid-cols-3 md:grid-cols-2">
          {
            searchProduct.map(product=><DecorProduct product={product} key={product._id}></DecorProduct>)
          }
        </section>
        <section className="absolute top-[440px] left-[-300px]">
          <h1 className="text-xl font-bold border-2 py-3 border-b-[#FABC3F]">
            Filter by :
          </h1>
          <button
            onClick={() => handleFilter("all")}
            className="mt-5 text-lg font-bold"
          >
            Products: ({data.length})
          </button>
          <br />
          <button
            onClick={() => handleFilter("Stock")}
            className="mt-2 font-bold "
          >
            In Stock: ({Stock.length})
          </button>
          <br />
          <button onClick={()=>handleFilter("limited")} className="mt-2 font-bold ">
            Limited Stock: ({LimitedStok.length})
          </button>
        </section>
      </div>
    );
};

export default Decor;