import React from "react";
import Head from "next/head";
import styles from "../../styles/About.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";
import Testimonials from "../../components/Testimonials";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import ProductHuntLogo from "../../public/images/producthunt.svg";
// import PlanetScaleLogo from "../../public/images/planetscale-about.svg";
// import HashnodeLogo from "../../public/images/hashnode-about.svg";

export default function index() {
  return (
    <div>
      <Head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Developer, Endorsements, Hiring, Job, Victor Eke, Planetscale, Hashnode, Hackathon"
        />
        {/* Primary met tags */}
        <title>
          About - Spekni - Hiring and Freelance organization Recruiters can
          Trust
        </title>
        <meta
          name="title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          name="description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />
        <meta
          name="author"
          content="EKe Victor, Spiff Jekey-Green, Nicholas Ovunda"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spekni.vercel.app/" />
        <meta
          property="og:title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          property="og:description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
        />

        <meta
          property="twitter:card"
          content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
        />
        <meta property="twitter:url" content="https://spekni.vercel.app/" />
        <meta
          property="twitter:title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          property="twitter:description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* About Layout */}
      <Navbar />
      <main className={styles.about}>
        <div className={styles.hero}>
          {/* <h1>
            We make it possble for people to endorse developers based on the
            skillsets they are proved to be proficient in.
          </h1> */}
          <h1>
            Recieving positive feedback from someone is always a good feeling.
            It&apos;s even better when it&apos;s in writing
          </h1>
          {/* <h1>
            “Showing gratitude is one of the simplest yet most powerful things
            humans can do for each other.” —Randy Pausch
          </h1> */}
          {/* <h1>
            “Kind words can be short and easy to speak, but their echoes are
            truly endless.” —Mother Teresa
          </h1> */}
          <figure className={styles.heroImage}>
            <svg
              width="140"
              height="40"
              viewBox="0 0 207 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
                fill="#444444"
              />
              <path
                fillRule="evenodd"
                clip-rule="evenodd"
                d="M12.9971 10H22.6638C26.5298 10 29.6638 13.134 29.6638 17C29.6638 20.866 26.5298 24 22.6638 24H16.9971V30H12.9971V10ZM16.9978 20.0024H22.6645C24.3212 20.0024 25.6645 18.6593 25.6645 17.0024C25.6645 15.3456 24.3212 14.0024 22.6645 14.0024H16.9978V20.0024Z"
                fill="white"
              />
              <path
                d="M52.65 29V11.5H59.85C60.95 11.5 61.9167 11.725 62.75 12.175C63.6 12.6083 64.2583 13.225 64.725 14.025C65.2083 14.825 65.45 15.775 65.45 16.875V17.225C65.45 18.3083 65.2 19.2583 64.7 20.075C64.2167 20.875 63.55 21.5 62.7 21.95C61.8667 22.3833 60.9167 22.6 59.85 22.6H55.95V29H52.65ZM55.95 19.6H59.525C60.3083 19.6 60.9417 19.3833 61.425 18.95C61.9083 18.5167 62.15 17.925 62.15 17.175V16.925C62.15 16.175 61.9083 15.5833 61.425 15.15C60.9417 14.7167 60.3083 14.5 59.525 14.5H55.95V19.6ZM67.8379 29V16.6H70.9379V18H71.3879C71.5712 17.5 71.8712 17.1333 72.2879 16.9C72.7212 16.6667 73.2212 16.55 73.7879 16.55H75.2879V19.35H73.7379C72.9379 19.35 72.2796 19.5667 71.7629 20C71.2462 20.4167 70.9879 21.0667 70.9879 21.95V29H67.8379ZM83.2105 29.35C81.9772 29.35 80.8689 29.1 79.8855 28.6C78.9022 28.1 78.1272 27.375 77.5605 26.425C76.9939 25.475 76.7105 24.3333 76.7105 23V22.6C76.7105 21.2667 76.9939 20.125 77.5605 19.175C78.1272 18.225 78.9022 17.5 79.8855 17C80.8689 16.5 81.9772 16.25 83.2105 16.25C84.4439 16.25 85.5522 16.5 86.5355 17C87.5189 17.5 88.2939 18.225 88.8605 19.175C89.4272 20.125 89.7105 21.2667 89.7105 22.6V23C89.7105 24.3333 89.4272 25.475 88.8605 26.425C88.2939 27.375 87.5189 28.1 86.5355 28.6C85.5522 29.1 84.4439 29.35 83.2105 29.35ZM83.2105 26.55C84.1772 26.55 84.9772 26.2417 85.6105 25.625C86.2439 24.9917 86.5605 24.0917 86.5605 22.925V22.675C86.5605 21.5083 86.2439 20.6167 85.6105 20C84.9939 19.3667 84.1939 19.05 83.2105 19.05C82.2439 19.05 81.4439 19.3667 80.8105 20C80.1772 20.6167 79.8605 21.5083 79.8605 22.675V22.925C79.8605 24.0917 80.1772 24.9917 80.8105 25.625C81.4439 26.2417 82.2439 26.55 83.2105 26.55ZM97.6182 29.35C96.6348 29.35 95.7098 29.1083 94.8432 28.625C93.9932 28.125 93.3098 27.4 92.7932 26.45C92.2765 25.5 92.0182 24.35 92.0182 23V22.6C92.0182 21.25 92.2765 20.1 92.7932 19.15C93.3098 18.2 93.9932 17.4833 94.8432 17C95.6932 16.5 96.6182 16.25 97.6182 16.25C98.3682 16.25 98.9932 16.3417 99.4932 16.525C100.01 16.6917 100.426 16.9083 100.743 17.175C101.06 17.4417 101.301 17.725 101.468 18.025H101.918V11.5H105.068V29H101.968V27.5H101.518C101.235 27.9667 100.793 28.3917 100.193 28.775C99.6098 29.1583 98.7515 29.35 97.6182 29.35ZM98.5682 26.6C99.5348 26.6 100.343 26.2917 100.993 25.675C101.643 25.0417 101.968 24.125 101.968 22.925V22.675C101.968 21.475 101.643 20.5667 100.993 19.95C100.36 19.3167 99.5515 19 98.5682 19C97.6015 19 96.7932 19.3167 96.1432 19.95C95.4932 20.5667 95.1682 21.475 95.1682 22.675V22.925C95.1682 24.125 95.4932 25.0417 96.1432 25.675C96.7932 26.2917 97.6015 26.6 98.5682 26.6ZM113.286 29.2C112.319 29.2 111.469 28.9833 110.736 28.55C110.019 28.1 109.461 27.4833 109.061 26.7C108.661 25.9167 108.461 25.0167 108.461 24V16.6H111.611V23.75C111.611 24.6833 111.836 25.3833 112.286 25.85C112.752 26.3167 113.411 26.55 114.261 26.55C115.227 26.55 115.977 26.2333 116.511 25.6C117.044 24.95 117.311 24.05 117.311 22.9V16.6H120.461V29H117.361V27.375H116.911C116.711 27.7917 116.336 28.2 115.786 28.6C115.236 29 114.402 29.2 113.286 29.2ZM129.791 29.35C128.591 29.35 127.499 29.1 126.516 28.6C125.549 28.1 124.782 27.375 124.216 26.425C123.649 25.475 123.366 24.325 123.366 22.975V22.625C123.366 21.275 123.649 20.125 124.216 19.175C124.782 18.225 125.549 17.5 126.516 17C127.499 16.5 128.591 16.25 129.791 16.25C130.974 16.25 131.991 16.4583 132.841 16.875C133.691 17.2917 134.374 17.8667 134.891 18.6C135.424 19.3167 135.774 20.1333 135.941 21.05L132.891 21.7C132.824 21.2 132.674 20.75 132.441 20.35C132.207 19.95 131.874 19.6333 131.441 19.4C131.024 19.1667 130.499 19.05 129.866 19.05C129.232 19.05 128.657 19.1917 128.141 19.475C127.641 19.7417 127.241 20.15 126.941 20.7C126.657 21.2333 126.516 21.8917 126.516 22.675V22.925C126.516 23.7083 126.657 24.375 126.941 24.925C127.241 25.4583 127.641 25.8667 128.141 26.15C128.657 26.4167 129.232 26.55 129.866 26.55C130.816 26.55 131.532 26.3083 132.016 25.825C132.516 25.325 132.832 24.675 132.966 23.875L136.016 24.6C135.799 25.4833 135.424 26.2917 134.891 27.025C134.374 27.7417 133.691 28.3083 132.841 28.725C131.991 29.1417 130.974 29.35 129.791 29.35ZM142.949 29C142.133 29 141.466 28.75 140.949 28.25C140.449 27.7333 140.199 27.05 140.199 26.2V19.2H137.099V16.6H140.199V12.75H143.349V16.6H146.749V19.2H143.349V25.65C143.349 26.15 143.583 26.4 144.049 26.4H146.449V29H142.949ZM149.501 29V11.5H152.801V18.725H159.301V11.5H162.601V29H159.301V21.725H152.801V29H149.501ZM170.732 29.2C169.765 29.2 168.915 28.9833 168.182 28.55C167.465 28.1 166.907 27.4833 166.507 26.7C166.107 25.9167 165.907 25.0167 165.907 24V16.6H169.057V23.75C169.057 24.6833 169.282 25.3833 169.732 25.85C170.199 26.3167 170.857 26.55 171.707 26.55C172.674 26.55 173.424 26.2333 173.957 25.6C174.49 24.95 174.757 24.05 174.757 22.9V16.6H177.907V29H174.807V27.375H174.357C174.157 27.7917 173.782 28.2 173.232 28.6C172.682 29 171.849 29.2 170.732 29.2ZM181.412 29V16.6H184.512V18.225H184.962C185.162 17.7917 185.537 17.3833 186.087 17C186.637 16.6 187.47 16.4 188.587 16.4C189.554 16.4 190.395 16.625 191.112 17.075C191.845 17.5083 192.412 18.1167 192.812 18.9C193.212 19.6667 193.412 20.5667 193.412 21.6V29H190.262V21.85C190.262 20.9167 190.029 20.2167 189.562 19.75C189.112 19.2833 188.462 19.05 187.612 19.05C186.645 19.05 185.895 19.375 185.362 20.025C184.829 20.6583 184.562 21.55 184.562 22.7V29H181.412ZM201.226 29C200.409 29 199.742 28.75 199.226 28.25C198.726 27.7333 198.476 27.05 198.476 26.2V19.2H195.376V16.6H198.476V12.75H201.626V16.6H205.026V19.2H201.626V25.65C201.626 26.15 201.859 26.4 202.326 26.4H204.726V29H201.226Z"
                fill="#444444"
              />
            </svg>

            {/* Planetscale badge */}
            <svg
              width="120"
              height="40"
              viewBox="0 0 200 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.65 30V12.5H65.85C66.95 12.5 67.9167 12.725 68.75 13.175C69.6 13.6083 70.2583 14.225 70.725 15.025C71.2083 15.825 71.45 16.775 71.45 17.875V18.225C71.45 19.3083 71.2 20.2583 70.7 21.075C70.2167 21.875 69.55 22.5 68.7 22.95C67.8667 23.3833 66.9167 23.6 65.85 23.6H61.95V30H58.65ZM61.95 20.6H65.525C66.3083 20.6 66.9417 20.3833 67.425 19.95C67.9083 19.5167 68.15 18.925 68.15 18.175V17.925C68.15 17.175 67.9083 16.5833 67.425 16.15C66.9417 15.7167 66.3083 15.5 65.525 15.5H61.95V20.6ZM73.8379 30V12.5H76.9879V30H73.8379ZM84.3285 30.35C83.4452 30.35 82.6535 30.2 81.9535 29.9C81.2535 29.5833 80.6952 29.1333 80.2785 28.55C79.8785 27.95 79.6785 27.225 79.6785 26.375C79.6785 25.525 79.8785 24.8167 80.2785 24.25C80.6952 23.6667 81.2618 23.2333 81.9785 22.95C82.7118 22.65 83.5452 22.5 84.4785 22.5H87.8785V21.8C87.8785 21.2167 87.6952 20.7417 87.3285 20.375C86.9618 19.9917 86.3785 19.8 85.5785 19.8C84.7952 19.8 84.2118 19.9833 83.8285 20.35C83.4452 20.7 83.1952 21.1583 83.0785 21.725L80.1785 20.75C80.3785 20.1167 80.6952 19.5417 81.1285 19.025C81.5785 18.4917 82.1702 18.0667 82.9035 17.75C83.6535 17.4167 84.5618 17.25 85.6285 17.25C87.2618 17.25 88.5535 17.6583 89.5035 18.475C90.4535 19.2917 90.9285 20.475 90.9285 22.025V26.65C90.9285 27.15 91.1618 27.4 91.6285 27.4H92.6285V30H90.5285C89.9118 30 89.4035 29.85 89.0035 29.55C88.6035 29.25 88.4035 28.85 88.4035 28.35V28.325H87.9285C87.8618 28.525 87.7118 28.7917 87.4785 29.125C87.2452 29.4417 86.8785 29.725 86.3785 29.975C85.8785 30.225 85.1952 30.35 84.3285 30.35ZM84.8785 27.8C85.7618 27.8 86.4785 27.5583 87.0285 27.075C87.5952 26.575 87.8785 25.9167 87.8785 25.1V24.85H84.7035C84.1202 24.85 83.6618 24.975 83.3285 25.225C82.9952 25.475 82.8285 25.825 82.8285 26.275C82.8285 26.725 83.0035 27.0917 83.3535 27.375C83.7035 27.6583 84.2118 27.8 84.8785 27.8ZM94.9316 30V17.6H98.0316V19.225H98.4816C98.6816 18.7917 99.0566 18.3833 99.6066 18C100.157 17.6 100.99 17.4 102.107 17.4C103.073 17.4 103.915 17.625 104.632 18.075C105.365 18.5083 105.932 19.1167 106.332 19.9C106.732 20.6667 106.932 21.5667 106.932 22.6V30H103.782V22.85C103.782 21.9167 103.548 21.2167 103.082 20.75C102.632 20.2833 101.982 20.05 101.132 20.05C100.165 20.05 99.415 20.375 98.8816 21.025C98.3483 21.6583 98.0816 22.55 98.0816 23.7V30H94.9316ZM115.987 30.35C114.754 30.35 113.662 30.0917 112.712 29.575C111.779 29.0417 111.045 28.3 110.512 27.35C109.995 26.3833 109.737 25.25 109.737 23.95V23.65C109.737 22.35 109.995 21.225 110.512 20.275C111.029 19.3083 111.754 18.5667 112.687 18.05C113.62 17.5167 114.704 17.25 115.937 17.25C117.154 17.25 118.212 17.525 119.112 18.075C120.012 18.6083 120.712 19.3583 121.212 20.325C121.712 21.275 121.962 22.3833 121.962 23.65V24.725H112.937C112.97 25.575 113.287 26.2667 113.887 26.8C114.487 27.3333 115.22 27.6 116.087 27.6C116.97 27.6 117.62 27.4083 118.037 27.025C118.454 26.6417 118.77 26.2167 118.987 25.75L121.562 27.1C121.329 27.5333 120.987 28.0083 120.537 28.525C120.104 29.025 119.52 29.4583 118.787 29.825C118.054 30.175 117.12 30.35 115.987 30.35ZM112.962 22.375H118.762C118.695 21.6583 118.404 21.0833 117.887 20.65C117.387 20.2167 116.729 20 115.912 20C115.062 20 114.387 20.2167 113.887 20.65C113.387 21.0833 113.079 21.6583 112.962 22.375ZM129.101 30C128.284 30 127.617 29.75 127.101 29.25C126.601 28.7333 126.351 28.05 126.351 27.2V20.2H123.251V17.6H126.351V13.75H129.501V17.6H132.901V20.2H129.501V26.65C129.501 27.15 129.734 27.4 130.201 27.4H132.601V30H129.101ZM141.727 30.35C140.377 30.35 139.185 30.1083 138.152 29.625C137.119 29.1417 136.31 28.45 135.727 27.55C135.144 26.65 134.852 25.5667 134.852 24.3V23.6H138.102V24.3C138.102 25.35 138.427 26.1417 139.077 26.675C139.727 27.1917 140.61 27.45 141.727 27.45C142.86 27.45 143.702 27.225 144.252 26.775C144.819 26.325 145.102 25.75 145.102 25.05C145.102 24.5667 144.96 24.175 144.677 23.875C144.41 23.575 144.01 23.3333 143.477 23.15C142.96 22.95 142.327 22.7667 141.577 22.6L141.002 22.475C139.802 22.2083 138.769 21.875 137.902 21.475C137.052 21.0583 136.394 20.5167 135.927 19.85C135.477 19.1833 135.252 18.3167 135.252 17.25C135.252 16.1833 135.502 15.275 136.002 14.525C136.519 13.7583 137.235 13.175 138.152 12.775C139.085 12.3583 140.177 12.15 141.427 12.15C142.677 12.15 143.785 12.3667 144.752 12.8C145.735 13.2167 146.502 13.85 147.052 14.7C147.619 15.5333 147.902 16.5833 147.902 17.85V18.6H144.652V17.85C144.652 17.1833 144.519 16.65 144.252 16.25C144.002 15.8333 143.635 15.5333 143.152 15.35C142.669 15.15 142.094 15.05 141.427 15.05C140.427 15.05 139.685 15.2417 139.202 15.625C138.735 15.9917 138.502 16.5 138.502 17.15C138.502 17.5833 138.61 17.95 138.827 18.25C139.06 18.55 139.402 18.8 139.852 19C140.302 19.2 140.877 19.375 141.577 19.525L142.152 19.65C143.402 19.9167 144.485 20.2583 145.402 20.675C146.335 21.0917 147.06 21.6417 147.577 22.325C148.094 23.0083 148.352 23.8833 148.352 24.95C148.352 26.0167 148.077 26.9583 147.527 27.775C146.994 28.575 146.227 29.2083 145.227 29.675C144.244 30.125 143.077 30.35 141.727 30.35ZM156.738 30.35C155.538 30.35 154.446 30.1 153.463 29.6C152.496 29.1 151.73 28.375 151.163 27.425C150.596 26.475 150.313 25.325 150.313 23.975V23.625C150.313 22.275 150.596 21.125 151.163 20.175C151.73 19.225 152.496 18.5 153.463 18C154.446 17.5 155.538 17.25 156.738 17.25C157.921 17.25 158.938 17.4583 159.788 17.875C160.638 18.2917 161.321 18.8667 161.838 19.6C162.371 20.3167 162.721 21.1333 162.888 22.05L159.838 22.7C159.771 22.2 159.621 21.75 159.388 21.35C159.155 20.95 158.821 20.6333 158.388 20.4C157.971 20.1667 157.446 20.05 156.813 20.05C156.18 20.05 155.605 20.1917 155.088 20.475C154.588 20.7417 154.188 21.15 153.888 21.7C153.605 22.2333 153.463 22.8917 153.463 23.675V23.925C153.463 24.7083 153.605 25.375 153.888 25.925C154.188 26.4583 154.588 26.8667 155.088 27.15C155.605 27.4167 156.18 27.55 156.813 27.55C157.763 27.55 158.48 27.3083 158.963 26.825C159.463 26.325 159.78 25.675 159.913 24.875L162.963 25.6C162.746 26.4833 162.371 27.2917 161.838 28.025C161.321 28.7417 160.638 29.3083 159.788 29.725C158.938 30.1417 157.921 30.35 156.738 30.35ZM169.412 30.35C168.528 30.35 167.737 30.2 167.037 29.9C166.337 29.5833 165.778 29.1333 165.362 28.55C164.962 27.95 164.762 27.225 164.762 26.375C164.762 25.525 164.962 24.8167 165.362 24.25C165.778 23.6667 166.345 23.2333 167.062 22.95C167.795 22.65 168.628 22.5 169.562 22.5H172.962V21.8C172.962 21.2167 172.778 20.7417 172.412 20.375C172.045 19.9917 171.462 19.8 170.662 19.8C169.878 19.8 169.295 19.9833 168.912 20.35C168.528 20.7 168.278 21.1583 168.162 21.725L165.262 20.75C165.462 20.1167 165.778 19.5417 166.212 19.025C166.662 18.4917 167.253 18.0667 167.987 17.75C168.737 17.4167 169.645 17.25 170.712 17.25C172.345 17.25 173.637 17.6583 174.587 18.475C175.537 19.2917 176.012 20.475 176.012 22.025V26.65C176.012 27.15 176.245 27.4 176.712 27.4H177.712V30H175.612C174.995 30 174.487 29.85 174.087 29.55C173.687 29.25 173.487 28.85 173.487 28.35V28.325H173.012C172.945 28.525 172.795 28.7917 172.562 29.125C172.328 29.4417 171.962 29.725 171.462 29.975C170.962 30.225 170.278 30.35 169.412 30.35ZM169.962 27.8C170.845 27.8 171.562 27.5583 172.112 27.075C172.678 26.575 172.962 25.9167 172.962 25.1V24.85H169.787C169.203 24.85 168.745 24.975 168.412 25.225C168.078 25.475 167.912 25.825 167.912 26.275C167.912 26.725 168.087 27.0917 168.437 27.375C168.787 27.6583 169.295 27.8 169.962 27.8ZM180.015 30V12.5H183.165V30H180.015ZM192.305 30.35C191.072 30.35 189.98 30.0917 189.03 29.575C188.097 29.0417 187.364 28.3 186.83 27.35C186.314 26.3833 186.055 25.25 186.055 23.95V23.65C186.055 22.35 186.314 21.225 186.83 20.275C187.347 19.3083 188.072 18.5667 189.005 18.05C189.939 17.5167 191.022 17.25 192.255 17.25C193.472 17.25 194.53 17.525 195.43 18.075C196.33 18.6083 197.03 19.3583 197.53 20.325C198.03 21.275 198.28 22.3833 198.28 23.65V24.725H189.255C189.289 25.575 189.605 26.2667 190.205 26.8C190.805 27.3333 191.539 27.6 192.405 27.6C193.289 27.6 193.939 27.4083 194.355 27.025C194.772 26.6417 195.089 26.2167 195.305 25.75L197.88 27.1C197.647 27.5333 197.305 28.0083 196.855 28.525C196.422 29.025 195.839 29.4583 195.105 29.825C194.372 30.175 193.439 30.35 192.305 30.35ZM189.28 22.375H195.08C195.014 21.6583 194.722 21.0833 194.205 20.65C193.705 20.2167 193.047 20 192.23 20C191.38 20 190.705 20.2167 190.205 20.65C189.705 21.0833 189.397 21.6583 189.28 22.375Z"
                fill="#444444"
              />
              <path
                d="M0 20.0001C9.40332e-07 8.95433 8.95444 -9.40321e-07 20.0003 0C28.1219 7.10001e-07 35.1128 4.84074 38.2451 11.7943L11.7944 38.2447C10.6594 37.7334 9.5806 37.1193 8.57003 36.4142L24.9844 20.0001H20.0003L5.85796 34.1422C2.23861 30.5229 -4.8283e-07 25.5229 0 20.0001Z"
                fill="#444444"
              />
              <path
                d="M40.0002 20.0068L20.0068 40C31.0472 39.9963 39.9965 31.0471 40.0002 20.0068Z"
                fill="#444444"
              />
            </svg>

            {/* Hashnode badge */}
            <svg
              width="115"
              height="40"
              viewBox="0 0 174 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.65 29V11.5H57.95V18.725H64.45V11.5H67.75V29H64.45V21.725H57.95V29H54.65ZM75.0063 29.35C74.1229 29.35 73.3313 29.2 72.6313 28.9C71.9313 28.5833 71.3729 28.1333 70.9563 27.55C70.5563 26.95 70.3563 26.225 70.3563 25.375C70.3563 24.525 70.5563 23.8167 70.9563 23.25C71.3729 22.6667 71.9396 22.2333 72.6563 21.95C73.3896 21.65 74.2229 21.5 75.1563 21.5H78.5563V20.8C78.5563 20.2167 78.3729 19.7417 78.0063 19.375C77.6396 18.9917 77.0563 18.8 76.2563 18.8C75.4729 18.8 74.8896 18.9833 74.5063 19.35C74.1229 19.7 73.8729 20.1583 73.7563 20.725L70.8563 19.75C71.0563 19.1167 71.3729 18.5417 71.8063 18.025C72.2563 17.4917 72.8479 17.0667 73.5813 16.75C74.3313 16.4167 75.2396 16.25 76.3063 16.25C77.9396 16.25 79.2313 16.6583 80.1813 17.475C81.1313 18.2917 81.6063 19.475 81.6063 21.025V25.65C81.6063 26.15 81.8396 26.4 82.3063 26.4H83.3063V29H81.2063C80.5896 29 80.0813 28.85 79.6813 28.55C79.2813 28.25 79.0813 27.85 79.0813 27.35V27.325H78.6063C78.5396 27.525 78.3896 27.7917 78.1563 28.125C77.9229 28.4417 77.5563 28.725 77.0563 28.975C76.5563 29.225 75.8729 29.35 75.0063 29.35ZM75.5563 26.8C76.4396 26.8 77.1563 26.5583 77.7063 26.075C78.2729 25.575 78.5563 24.9167 78.5563 24.1V23.85H75.3813C74.7979 23.85 74.3396 23.975 74.0063 24.225C73.6729 24.475 73.5063 24.825 73.5063 25.275C73.5063 25.725 73.6813 26.0917 74.0313 26.375C74.3813 26.6583 74.8896 26.8 75.5563 26.8ZM90.6617 29.35C89.0451 29.35 87.7201 29 86.6867 28.3C85.6534 27.6 85.0284 26.6 84.8117 25.3L87.7117 24.55C87.8284 25.1333 88.0201 25.5917 88.2867 25.925C88.5701 26.2583 88.9117 26.5 89.3117 26.65C89.7284 26.7833 90.1784 26.85 90.6617 26.85C91.3951 26.85 91.9367 26.725 92.2867 26.475C92.6367 26.2083 92.8117 25.8833 92.8117 25.5C92.8117 25.1167 92.6451 24.825 92.3117 24.625C91.9784 24.4083 91.4451 24.2333 90.7117 24.1L90.0117 23.975C89.1451 23.8083 88.3534 23.5833 87.6367 23.3C86.9201 23 86.3451 22.5917 85.9117 22.075C85.4784 21.5583 85.2617 20.8917 85.2617 20.075C85.2617 18.8417 85.7117 17.9 86.6117 17.25C87.5117 16.5833 88.6951 16.25 90.1617 16.25C91.5451 16.25 92.6951 16.5583 93.6117 17.175C94.5284 17.7917 95.1284 18.6 95.4117 19.6L92.4867 20.5C92.3534 19.8667 92.0784 19.4167 91.6617 19.15C91.2617 18.8833 90.7617 18.75 90.1617 18.75C89.5617 18.75 89.1034 18.8583 88.7867 19.075C88.4701 19.275 88.3117 19.5583 88.3117 19.925C88.3117 20.325 88.4784 20.625 88.8117 20.825C89.1451 21.0083 89.5951 21.15 90.1617 21.25L90.8617 21.375C91.7951 21.5417 92.6367 21.7667 93.3867 22.05C94.1534 22.3167 94.7534 22.7083 95.1867 23.225C95.6367 23.725 95.8617 24.4083 95.8617 25.275C95.8617 26.575 95.3867 27.5833 94.4367 28.3C93.5034 29 92.2451 29.35 90.6617 29.35ZM98.6221 29V11.5H101.772V18.125H102.222C102.355 17.8583 102.564 17.5917 102.847 17.325C103.13 17.0583 103.505 16.8417 103.972 16.675C104.455 16.4917 105.064 16.4 105.797 16.4C106.764 16.4 107.605 16.625 108.322 17.075C109.055 17.5083 109.622 18.1167 110.022 18.9C110.422 19.6667 110.622 20.5667 110.622 21.6V29H107.472V21.85C107.472 20.9167 107.239 20.2167 106.772 19.75C106.322 19.2833 105.672 19.05 104.822 19.05C103.855 19.05 103.105 19.375 102.572 20.025C102.039 20.6583 101.772 21.55 101.772 22.7V29H98.6221ZM114.027 29V16.6H117.127V18.225H117.577C117.777 17.7917 118.152 17.3833 118.702 17C119.252 16.6 120.086 16.4 121.202 16.4C122.169 16.4 123.011 16.625 123.727 17.075C124.461 17.5083 125.027 18.1167 125.427 18.9C125.827 19.6667 126.027 20.5667 126.027 21.6V29H122.877V21.85C122.877 20.9167 122.644 20.2167 122.177 19.75C121.727 19.2833 121.077 19.05 120.227 19.05C119.261 19.05 118.511 19.375 117.977 20.025C117.444 20.6583 117.177 21.55 117.177 22.7V29H114.027ZM135.333 29.35C134.099 29.35 132.991 29.1 132.008 28.6C131.024 28.1 130.249 27.375 129.683 26.425C129.116 25.475 128.833 24.3333 128.833 23V22.6C128.833 21.2667 129.116 20.125 129.683 19.175C130.249 18.225 131.024 17.5 132.008 17C132.991 16.5 134.099 16.25 135.333 16.25C136.566 16.25 137.674 16.5 138.658 17C139.641 17.5 140.416 18.225 140.983 19.175C141.549 20.125 141.833 21.2667 141.833 22.6V23C141.833 24.3333 141.549 25.475 140.983 26.425C140.416 27.375 139.641 28.1 138.658 28.6C137.674 29.1 136.566 29.35 135.333 29.35ZM135.333 26.55C136.299 26.55 137.099 26.2417 137.733 25.625C138.366 24.9917 138.683 24.0917 138.683 22.925V22.675C138.683 21.5083 138.366 20.6167 137.733 20C137.116 19.3667 136.316 19.05 135.333 19.05C134.366 19.05 133.566 19.3667 132.933 20C132.299 20.6167 131.983 21.5083 131.983 22.675V22.925C131.983 24.0917 132.299 24.9917 132.933 25.625C133.566 26.2417 134.366 26.55 135.333 26.55ZM149.74 29.35C148.757 29.35 147.832 29.1083 146.965 28.625C146.115 28.125 145.432 27.4 144.915 26.45C144.399 25.5 144.14 24.35 144.14 23V22.6C144.14 21.25 144.399 20.1 144.915 19.15C145.432 18.2 146.115 17.4833 146.965 17C147.815 16.5 148.74 16.25 149.74 16.25C150.49 16.25 151.115 16.3417 151.615 16.525C152.132 16.6917 152.549 16.9083 152.865 17.175C153.182 17.4417 153.424 17.725 153.59 18.025H154.04V11.5H157.19V29H154.09V27.5H153.64C153.357 27.9667 152.915 28.3917 152.315 28.775C151.732 29.1583 150.874 29.35 149.74 29.35ZM150.69 26.6C151.657 26.6 152.465 26.2917 153.115 25.675C153.765 25.0417 154.09 24.125 154.09 22.925V22.675C154.09 21.475 153.765 20.5667 153.115 19.95C152.482 19.3167 151.674 19 150.69 19C149.724 19 148.915 19.3167 148.265 19.95C147.615 20.5667 147.29 21.475 147.29 22.675V22.925C147.29 24.125 147.615 25.0417 148.265 25.675C148.915 26.2917 149.724 26.6 150.69 26.6ZM166.333 29.35C165.099 29.35 164.008 29.0917 163.058 28.575C162.124 28.0417 161.391 27.3 160.858 26.35C160.341 25.3833 160.083 24.25 160.083 22.95V22.65C160.083 21.35 160.341 20.225 160.858 19.275C161.374 18.3083 162.099 17.5667 163.033 17.05C163.966 16.5167 165.049 16.25 166.283 16.25C167.499 16.25 168.558 16.525 169.458 17.075C170.358 17.6083 171.058 18.3583 171.558 19.325C172.058 20.275 172.308 21.3833 172.308 22.65V23.725H163.283C163.316 24.575 163.633 25.2667 164.233 25.8C164.833 26.3333 165.566 26.6 166.433 26.6C167.316 26.6 167.966 26.4083 168.383 26.025C168.799 25.6417 169.116 25.2167 169.333 24.75L171.908 26.1C171.674 26.5333 171.333 27.0083 170.883 27.525C170.449 28.025 169.866 28.4583 169.133 28.825C168.399 29.175 167.466 29.35 166.333 29.35ZM163.308 21.375H169.108C169.041 20.6583 168.749 20.0833 168.233 19.65C167.733 19.2167 167.074 19 166.258 19C165.408 19 164.733 19.2167 164.233 19.65C163.733 20.0833 163.424 20.6583 163.308 21.375Z"
                fill="#444444"
              />
              <path
                d="M37.2517 13.365L26.635 2.7483C24.8753 0.988593 22.4886 0 20 0C17.5114 0 15.1247 0.988593 13.365 2.7483L2.7483 13.365C0.988593 15.1247 0 17.5114 0 20C0 22.4886 0.988593 24.8753 2.7483 26.635L13.365 37.2517C15.1247 39.0114 17.5114 40 20 40C22.4886 40 24.8753 39.0114 26.635 37.2517L37.2517 26.635C39.0114 24.8753 40 22.4886 40 20C40 17.5114 39.0114 15.1247 37.2517 13.365ZM20 26.5883C19.1348 26.5883 18.2781 26.4179 17.4788 26.0868C16.6794 25.7557 15.9531 25.2704 15.3413 24.6587C14.7296 24.0469 14.2443 23.3206 13.9132 22.5213C13.5821 21.7219 13.4117 20.8652 13.4117 20C13.4117 19.1348 13.5821 18.2781 13.9132 17.4788C14.2443 16.6794 14.7296 15.9531 15.3413 15.3413C15.9531 14.7296 16.6794 14.2443 17.4788 13.9132C18.2781 13.5821 19.1348 13.4117 20 13.4117C21.7473 13.4117 23.4231 14.1058 24.6587 15.3413C25.8942 16.5769 26.5883 18.2527 26.5883 20C26.5883 21.7473 25.8942 23.4231 24.6587 24.6587C23.4231 25.8942 21.7473 26.5883 20 26.5883Z"
                fill="#444444"
              />
            </svg>

            {/* Daily.dev */}
            <svg
              width="125"
              height="26"
              viewBox="0 0 148 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.8161 12.9861L34.6977 7.85705L37.2555 2.72974L45.5719 11.0635C46.6315 12.1254 46.6315 13.8469 45.5719 14.9088L35.336 25.1661C34.2764 26.2279 32.5584 26.2279 31.4988 25.1661C30.4392 24.1042 30.4392 22.3826 31.4988 21.3208L39.8161 12.9861Z"
                fill="#444444"
              />
              <path
                d="M31.5005 0.796157C32.5602 -0.265683 34.2786 -0.265237 35.3382 0.796602L37.2573 2.71968L14.8678 25.156C13.8082 26.2178 12.0898 26.2174 11.0301 25.1556L9.11108 23.2325L31.5005 0.796157ZM21.9048 7.84788L18.0667 11.694L12.9483 6.56494L6.55056 12.9761L11.6689 18.1052L9.11108 23.2325L0.794716 14.8987C-0.264905 13.8369 -0.264905 12.1153 0.794716 11.0535L11.0301 0.796602C12.0898 -0.265237 13.8082 -0.265683 14.8678 0.796157L21.9048 7.84788Z"
                fill="#444444"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M57.7613 8.80387V17.5158H62.5466L63.5609 20.4197H57.7613C56.1629 20.4197 54.8672 19.1196 54.8672 17.5158V8.80387C54.8672 7.20005 56.1629 5.8999 57.7613 5.8999H62.5466V8.80387H63.5609V2.99593C63.5609 2.19402 64.2096 1.54395 65.0098 1.54395H66.4588V18.9678C66.4588 19.7697 65.8101 20.4197 65.0098 20.4197H63.5609V8.80387H57.7613ZM72.2508 20.4198C70.6524 20.4198 69.3567 19.1196 69.3567 17.5158V14.6118C69.3567 13.008 70.6524 11.7078 72.2508 11.7078H77.0361V14.6118H78.0504V8.80387H70.0802V7.35188C70.0802 6.54998 70.7281 5.8999 71.5273 5.8999H78.0504C79.6509 5.8999 80.9483 7.20005 80.9483 8.80387V18.9678C80.9483 19.7697 80.2996 20.4198 79.4994 20.4198H78.0504V14.6118H72.2508V17.5158H77.0361L78.0504 20.4198C74.4779 20.4198 72.5447 20.4198 72.2508 20.4198ZM83.8462 20.4197V7.35188C83.8462 6.54997 84.4941 5.8999 85.2932 5.8999H86.7403V18.9678C86.7403 19.7697 86.0924 20.4197 85.2932 20.4197H83.8462ZM86.7403 3.00542C86.7403 3.41033 86.6016 3.75197 86.3241 4.03035C86.0467 4.30873 85.7062 4.44791 85.3027 4.44791C84.8992 4.44791 84.5555 4.30873 84.2718 4.03035C83.9881 3.75197 83.8462 3.41033 83.8462 3.00542C83.8462 2.58785 83.9881 2.23989 84.2718 1.96151C84.5555 1.68313 84.8992 1.54395 85.3027 1.54395C85.7062 1.54395 86.0467 1.68313 86.3241 1.96151C86.6016 2.23989 86.7403 2.58785 86.7403 3.00542ZM89.642 20.4197V2.99593C89.642 2.19402 90.2899 1.54395 91.0891 1.54395H92.5361V18.9678C92.5361 19.7697 91.8882 20.4197 91.0891 20.4197H89.642ZM99.4077 20.4256L95.5005 8.13748C95.2669 7.37061 95.7071 6.55887 96.4713 6.32442L97.8478 5.8999L101.036 16.3359L103.904 6.92775C104.138 6.16088 104.937 5.72927 105.701 5.96373L107.029 6.38825L102.108 22.7202C101.736 23.9411 100.613 24.775 99.3403 24.7752L96.9478 24.7757C96.1486 24.7757 95.5006 24.1258 95.5005 23.3239L95.5007 21.8717H97.9058C98.7027 21.8717 99.4045 21.2252 99.4077 20.4256Z"
                fill="#444444"
              />
              <path
                d="M111.75 20.6088V18.557H109.646V20.6088H111.75ZM118.046 20.743C119.066 20.743 119.931 20.4873 120.639 19.976C121.347 19.4646 121.841 18.7807 122.122 17.9242V20.6088H123.863V6.41895H122.122V12.766C121.841 11.9095 121.347 11.2256 120.639 10.7142C119.931 10.2029 119.066 9.94722 118.046 9.94722C117.115 9.94722 116.285 10.1645 115.558 10.5992C114.831 11.0338 114.26 11.6602 113.846 12.4784C113.431 13.2965 113.224 14.2553 113.224 15.3547C113.224 16.4541 113.431 17.4097 113.846 18.2214C114.26 19.0332 114.831 19.6564 115.558 20.091C116.285 20.5257 117.115 20.743 118.046 20.743ZM118.543 19.2089C117.472 19.2089 116.614 18.867 115.97 18.1831C115.326 17.4991 115.003 16.5563 115.003 15.3547C115.003 14.153 115.326 13.2102 115.97 12.5263C116.614 11.8424 117.472 11.5004 118.543 11.5004C119.232 11.5004 119.848 11.657 120.39 11.9702C120.932 12.2834 121.356 12.734 121.663 13.3221C121.969 13.9101 122.122 14.5877 122.122 15.3547C122.122 16.1217 121.969 16.796 121.663 17.3777C121.356 17.9593 120.932 18.41 120.39 18.7296C119.848 19.0492 119.232 19.2089 118.543 19.2089ZM131.288 20.743C132.168 20.743 132.959 20.5832 133.66 20.2636C134.362 19.944 134.933 19.4966 135.373 18.9213C135.813 18.3461 136.097 17.6941 136.225 16.9654H134.368C134.241 17.6813 133.893 18.2534 133.326 18.6816C132.758 19.1099 132.053 19.324 131.211 19.324C130.28 19.324 129.492 19.0236 128.848 18.4228C128.204 17.8219 127.862 16.9207 127.824 15.719H136.225C136.276 15.4506 136.301 15.131 136.301 14.7603C136.301 13.8782 136.1 13.0728 135.698 12.3441C135.296 11.6155 134.716 11.0338 133.957 10.5992C133.198 10.1645 132.308 9.94722 131.288 9.94722C130.28 9.94722 129.387 10.1645 128.609 10.5992C127.83 11.0338 127.221 11.6602 126.781 12.4784C126.341 13.2965 126.121 14.2553 126.121 15.3547C126.121 16.4541 126.341 17.4097 126.781 18.2214C127.221 19.0332 127.83 19.6564 128.609 20.091C129.387 20.5257 130.28 20.743 131.288 20.743ZM134.541 14.8753H127.824C127.875 13.7248 128.226 12.8523 128.877 12.2579C129.527 11.6634 130.331 11.3662 131.288 11.3662C131.887 11.3662 132.442 11.494 132.952 11.7497C133.463 12.0054 133.864 12.3953 134.158 12.9194C134.451 13.4435 134.579 14.0955 134.541 14.8753ZM143.668 20.6088L147.782 10.0814H145.907L142.654 18.7487L139.363 10.0814H137.487L141.602 20.6088H143.668Z"
                fill="#444444"
              />
            </svg>
          </figure>
        </div>

        <section className={styles.aboutSection}>
          <div className={styles.aboutImage}>
            <LazyLoadImage
              src="https://res.cloudinary.com/victoreke/image/upload/v1657578137/Spekni/about.png"
              width={750}
              height={410}
              effect="blur"
              alt="Group Image"
              placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/e_blur:1563/v1657567734/Spekni/about-placeholder.png"
            />
            <svg
              width="150"
              height="124"
              viewBox="0 0 150 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M83.9572 123.883C110.176 122.419 147.886 118.776 148.648 67.4251L149.581 2.81555L91.1353 1.97131L90.1368 71.0988L109.544 71.3791C110.506 89.8552 95.2547 94.4021 78.6912 97.8223L83.9572 123.883V123.883ZM5.65309 122.752C31.8716 121.288 69.5816 117.645 70.3439 66.294L71.2772 1.68446L12.8309 0.840218L11.8324 69.9677L31.2393 70.2481C32.2023 88.7241 16.9503 93.271 0.386775 96.6912L5.65309 122.752V122.752Z"
                fill="#3A52EE"
              />
            </svg>
          </div>
          <blockquote className={styles.aboutText}>
            <span className={styles.highlight}>M</span>ost developers do not
            seek credits or any form of validation for their work, tirelessly
            putting in a lot of effort to deliver great projects for users,
            clients and other devs. We know not all heroes wear capes, but every
            now and then, a show of appreciation for the tireless contribution
            they make can greatly increase their opportunities This is our
            mission with Spekni. —Providing a platform where developers can be
            endorsed and given recommendations by clients, teachers,
            maintaniers, and even students to preach about their good works
          </blockquote>
        </section>
      </main>
      {/* <Testimonials /> */}
      <Jumbotron />
      <Footer />
    </div>
  );
}
