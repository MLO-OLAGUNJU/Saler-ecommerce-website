"use client";

import { Product } from "@prisma/client";
import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { product } from "@/utils/product";
import formatPrice from "@/utils/formatPrice";

interface ManageProductsClientProps {
  products: Product[];
}

const ManageProductsClient: React.FC<ManageProductsClientProps> = ({
  products,
}) => {
  let rows: any = [];

  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        images: product.images,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "price",
      headerName: "Price(USD)",
      width: 145,
      renderCell: (params) => {
        return (
          <div className=" font-bold text-slate-800">{params.row.price}</div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 145 },
    { field: "brand", headerName: "Brand", width: 145 },
    {
      field: "inStock",
      headerName: "inStock",
      width: 120,
      renderCell: (params) => {
        return (
          <div>{params.row.inStock === true ? "in stock" : "out of stock"}</div>
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => {
        return <div>Action</div>;
      },
    },
  ];
  return (
    <div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ManageProductsClient;
