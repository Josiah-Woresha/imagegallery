module.exports = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dek2cgjld/**", // Replace "dek2cgjld" with your Cloudinary cloud name
      },
    ],
  },
};

