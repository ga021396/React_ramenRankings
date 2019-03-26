import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ProductItem } from "./productItem";
import "../product.scss";

const Mask = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ProductGallery() {
  const [mask, setMask] = useState(false);

  const getDetail = e => {
    setMask(true);
  };

  useEffect(() => {}, []);

  return (
    <div>
      {mask && (
        <Mask onClick={console.log("111")}>
          <ProductItem onClick={console.log("222")} />
        </Mask>
      )}
      <div className="box">
        <div className="title">
          <span className="tag">CCCLOTHES</span>
          <span className="txt">MEN’S TOPS</span>
        </div>
        <div className="container1">
          <h1>LINEN BLAZER</h1>
          <div className="img" onClick={getDetail} />
          <div className="border" />
          <h2>01</h2>
          <div className="patt" />
          <p className="outfit">Men’s outfit</p>
        </div>
        <div className="container2">
          <div className="border" />
          <div className="img" />
          <div className="backpatt" />
          <h2 className="t03">03</h2>
          <h2 className="patt">Men’s pattern shirts</h2>
          <h2 className="super">SUPER SKINNY</h2>
        </div>
        <div className="container3">
          <h1>SWEATSHIRTS</h1>
          <div className="img" />
          <div className="border" />
          <h2>05</h2>
          <div className="patt" />
          <p className="jacket">Men’s jacket</p>
        </div>
        <div className="container4">
          <div className="border" />
          <div className="img" />
          <div className="backpatt" />
          <h2 className="t07">07</h2>
          <h2 className="shirt">Men’s shirts</h2>
          <h2 className="edi">EDITION</h2>
        </div>
        <div className="container5">
          <div className="border" />
          <div className="img" />
          <div className="backpatt" />
          <h2 className="t02">02</h2>
          <h2 className="basic">Men’s basics</h2>
          <h2 className="free">FREELIFT</h2>
        </div>
        <div className="container6">
          <h1>DENIM</h1>
          <div className="img" />
          <div className="border" />
          <h2>04</h2>
          <div className="patt" />
          <p className="cadual">Men’s cadual</p>
        </div>
        <div className="container7">
          <div className="border" />
          <div className="img" />
          <div className="backpatt" />
          <h2 className="t06">06</h2>
          <h2 className="classNameic">Men’s classNameic</h2>
          <h2 className="vin">VINTAGE DENIM</h2>
        </div>
      </div>
    </div>
  );
}
