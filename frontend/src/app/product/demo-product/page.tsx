"use client";
import React from 'react';
import DemoProductCard from '@/components/inner-pages/product/DemoProduct';
import { demos } from '@/data/demos';
import Wrapper from '@/layout/Wrapper';

const DemoProductPage = () => {
  return (
    <Wrapper>
      <div className="container py-5">
        <div className="row g-4">
          {demos.map((demo) => (
            <div key={demo.slug} className="col-md-6 col-lg-4">
              <DemoProductCard demo={demo} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default DemoProductPage;