/** @type {import('next').NextConfig} */
const nextConfig = {
images:{
    remotePatterns:[
        {
            protocol:"https",
            hostname:"3am-bicket.blr1.cdn.digitaloceanspaces.com",
            port:"",
            pathname:"/3am/**"
        }
    ]
}
};

module.exports = nextConfig;
