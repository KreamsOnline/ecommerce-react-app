'use client'

import Image from 'next/image'
import Header from '../components/Header';
import HeroSection from './ui/homepage/herosection';
import FeaturedProducts from './ui/homepage/featuredproducts';
import CustomizationShowcase from './ui/homepage/customizationshowcase';
import AboutUsTeaser from './ui/homepage/aboutusteaser';
import BlogHighlights from './ui/homepage/bloghighlights';
import NewsletterSignUp from './ui/homepage/newslettersignup';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
                  
      <HeroSection 
          title="Welcome to Our Store"
          description="Find the best anime and basketball themed products here!"
          buttonText="Shop Now"
          buttonLink="/products"
      />
      <FeaturedProducts />
      <CustomizationShowcase />
      <AboutUsTeaser />
      <BlogHighlights />
      <NewsletterSignUp />
  </main>
)
}
