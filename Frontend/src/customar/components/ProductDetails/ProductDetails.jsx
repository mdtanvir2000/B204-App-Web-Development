import { useEffect, useState } from "react";
import { Button, Rating } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../Data/mens_kurta";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../State/Product/Action";
import { addItemToCart } from "../../State/Cart/Action";
import { Box, Grid, LinearProgress } from "@mui/material";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);
  console.log("---", params.productId);

  const handleAddToCart = () => {
    const data = { productId: params.productId, size: selectedSize.name };
    console.log("data_", data);
    dispatch(addItemToCart(data));
    navigate("/cart");
  };

  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductsById(data));
  }, [dispatch, params.productId]);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 px-4 pt-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="overflow-hidden rounded-lg lg:block">
              <img
                src={product.productImages[0]}
                alt={product.productImages[0]}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 lg:mt-0 lg:grid lg:grid-cols-1 lg:gap-y-8">
              {product.productImages.slice(1).map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>
            <div className="mt-4 lg:mt-0 lg:col-span-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Product Information
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                {product.description}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="sr-only">Price</h3>
              <p className="text-3xl text-gray-900">{product.price}</p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <Rating name="read-only" value={reviews.average} readOnly />
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900">Size</h4>
              <div className="mt-2">
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="">Select a size</option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Button
              onClick={handleAddToCart}
              variant="contained"
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              sx={{ py: "0.7rem" }}
              disabled={!selectedSize}
            >
              Add to Cart
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
