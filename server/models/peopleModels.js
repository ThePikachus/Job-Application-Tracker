const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.PG_URI
});

// async function startDb() {
//   await pool.connect();
//   const residents = [
//     {name: "Bin Zheng", img:'https://media.licdn.com/dms/image/D4E03AQHqate1apey9g/profile-displayphoto-shrink_200_200/0/1704478821560?e=1710979200&v=beta&t=sv3A8VgKbuketyphJRU1LfFyDpB5udMwc7oQrX__XRc'},
//     {name: "Cam B", img:'https://media.licdn.com/dms/image/D4D03AQFhK43Uo0-jkA/profile-displayphoto-shrink_800_800/0/1670440251225?e=1710979200&v=beta&t=zt47ieECv37xAASJB62CXQpaewc9m4498LlRRSWhGRo'},
//     {name: "Conor Bell", img:'https://media.licdn.com/dms/image/C5603AQE-JrCdXTgLRQ/profile-displayphoto-shrink_200_200/0/1636897839643?e=1710979200&v=beta&t=o_tXIfh7hC1a_eLayqfqGZ2eno5qTPF-ZPZiwb98HmQ'},
//     {name: "Daniel Liang", img:'https://media.licdn.com/dms/image/C5603AQFvo6QhUxzVrA/profile-displayphoto-shrink_200_200/0/1657045256622?e=1710979200&v=beta&t=Q9lxOvkdIPmHRc-0vJnXLXli6zHwzS5Y7_rJ_LN3LMM'},
//     {name: "David Moore", img:'https://media.licdn.com/dms/image/D4D03AQE8wqzD_9nEAg/profile-displayphoto-shrink_800_800/0/1649362947005?e=1710979200&v=beta&t=JJJ81MbqMjf23GporCI7gysi-_OO1d1dL7CoOp6cha8'},
//     {name: "Donald Macak", img:'https://media.licdn.com/dms/image/D5603AQEabD1VOTZrpg/profile-displayphoto-shrink_200_200/0/1705005728415?e=1710979200&v=beta&t=WnoprVFkMHNiF9lk3RCoRnSuR9rouwtlMofKyHbwHuU'},
//     {name: "Eduardo Uribe", img:'https://media.licdn.com/dms/image/D4E03AQGPjI1M35hFYA/profile-displayphoto-shrink_200_200/0/1697677325090?e=1710979200&v=beta&t=2VfjeYxPvHN5zZXYZ10jRGs9YWkRuoZx1QyNMgyvX6g'},
//     {name: "Elsa Holmgren", img:'https://media.licdn.com/dms/image/D5603AQGsLLCqpXXc-w/profile-displayphoto-shrink_200_200/0/1704984666351?e=1710979200&v=beta&t=GDEl5V4jKKrRqYyCZIe3YAC0W2a0kw3omYLU_g5yU2o'},
//     {name: "Ezekiel Mohr", img:'https://media.licdn.com/dms/image/D4E03AQGNDnMb94-tzg/profile-displayphoto-shrink_200_200/0/1704913151039?e=1710979200&v=beta&t=ovwv6KvXu6O2tKoTv3MNZ8jzKGTtb0bgs9Xx4tFg-Wo'},
//     {name: "Hugh Stapleton", img:'https://media.licdn.com/dms/image/C4E03AQH_ud7U2Inu0w/profile-displayphoto-shrink_200_200/0/1564607507679?e=1710979200&v=beta&t=KP9ty6rubL9JwE929PrVg4hrRkA1dXuvCzpLIyqNtAE'},
//     {name: "Jake Kunkel", img:'https://media.licdn.com/dms/image/D5603AQHJngCzYfigYQ/profile-displayphoto-shrink_200_200/0/1703217794025?e=1710979200&v=beta&t=-ap705Nj0dotbj9rGeiptTm9q96P4ay9Pw1kmzkP1qM'},
//     {name: "Jason Wong", img:'https://media.licdn.com/dms/image/D4E03AQF4NQUYrXi9oA/profile-displayphoto-shrink_400_400/0/1704567133554?e=1710979200&v=beta&t=Calq5yD_SYDVclXIHrzaW4ZD-uRAU1ZGvBz6exGpSK0'},
//     {name: "Jeffrey Mai", img:'https://media.licdn.com/dms/image/D4E03AQF1Y73F4DfTVg/profile-displayphoto-shrink_200_200/0/1704901189065?e=1710979200&v=beta&t=Rywxxzp9cv0694fc1A2nKo_FXZFF7pwruXz1PJUtQd0'},
//     {name: "Jesse Rosengrant", img:'https://media.licdn.com/dms/image/C5603AQGc2EDvjbcEzQ/profile-displayphoto-shrink_200_200/0/1654637592842?e=1710979200&v=beta&t=qreOS2WiMMjRGxO3MT63NeL0y-_sdW5ORKzF8qxJrYI'},
//     {name: "John Norlin", img:'https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_200_200/0/1704990610950?e=1710979200&v=beta&t=xDZhE4ous41EnOGASav11NxZ_UbddiJNJTFNHQwNe2M'},
//     {name: "John Noh", img:'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'},
//     {name: "John Banks", img:'https://media.licdn.com/dms/image/D4D03AQHZr7U5cQg0Hg/profile-displayphoto-shrink_800_800/0/1704987053081?e=1710979200&v=beta&t=BwMM7o-DeMO85EbM7ptTnYutTcIJ9YvCQWY8eK8FMiA'},
//     {name: "Joshua McDaniel", img:'https://media.licdn.com/dms/image/D5603AQE-y5ZhCdy4sA/profile-displayphoto-shrink_200_200/0/1701451350948?e=1710979200&v=beta&t=FdjV3nqgu0kcNj9oen_3G0peWFQrKVxedlfegBVA7gg'},
//     {name: "Kelly Chandler", img:'https://media.licdn.com/dms/image/D5603AQE1zO3cqgAg9w/profile-displayphoto-shrink_200_200/0/1704992039386?e=1710979200&v=beta&t=s52xbManCPzJEtk9g0Ny6mTnswtqd8zV0x7FTANa6ds'},
//     {name: "Kola Bamgbose", img:'https://media.licdn.com/dms/image/D5603AQFIZVvVkweMPg/profile-displayphoto-shrink_200_200/0/1686251814938?e=1710979200&v=beta&t=XAojb3Qxr0Ww3ZrIvO6oIwT05fN7BRi-2pgrVQSg4oA'},
//     {name: "Landon Osteen", img:'https://media.licdn.com/dms/image/D4E03AQG2xgiUlBV8pQ/profile-displayphoto-shrink_200_200/0/1704406063327?e=1710979200&v=beta&t=qcFO9OiDDtVPj6FPeJkFLpCisRxuz9OWDtRTkgUW3VA'},
//     {name: "Laura Forden", img:'https://media.licdn.com/dms/image/C4E03AQEGCFosSSy6gw/profile-displayphoto-shrink_200_200/0/1614718523516?e=1710979200&v=beta&t=pVIGoc0I9VdIZjIobhj1t8ReXfQGvjKmD_bclqJ-aDo'},
//     {name: "Lauren Leer", img:'https://media.licdn.com/dms/image/D5603AQGBwQ_YXt-3FA/profile-displayphoto-shrink_400_400/0/1682044482858?e=1710979200&v=beta&t=96wnlQhnyYGaP6HdNPu5ybMxyeCTp-j9jOErLLfFHQA'},
//     {name: "Liam Donaher", img:'https://media.licdn.com/dms/image/C4E03AQH0s4rla2zKcQ/profile-displayphoto-shrink_200_200/0/1520271641486?e=1710979200&v=beta&t=YAq_CV-8yGFwEIisVkhj4EJnL2crI6Bd0EFH3-SO6iQ'},
//     {name: "Matthew Cummings", img:'https://media.licdn.com/dms/image/D4E03AQEjLiZvBQrDSQ/profile-displayphoto-shrink_200_200/0/1704921176549?e=1710979200&v=beta&t=0Ot20trveu55jick1E2QPvmyamic-p8ltU3cxKvtw44'},
//     {name: "Matthew Jones", img:'https://media.licdn.com/dms/image/C4D03AQGOkwfHs8ZeFw/profile-displayphoto-shrink_200_200/0/1583910376003?e=1710979200&v=beta&t=Bow6nkzv9YJt9jbgDpXdXBOLNY4kHfZSzcxfrwHUfgc'},
//     {name: "Mckenzie Morris", img:'https://media.licdn.com/dms/image/D4E03AQHSHEOsm_6ldQ/profile-displayphoto-shrink_200_200/0/1696799489385?e=1710979200&v=beta&t=PXs_d_d12trbiBwBVWrqoyHwE_AJjEBoR8wiEbtArUA'}, 
//     {name: "Michelle Xie", img:'https://media.licdn.com/dms/image/D5603AQHUncHrjgJY-w/profile-displayphoto-shrink_200_200/0/1705073661314?e=1710979200&v=beta&t=ShboOu3u0Osg15a_638nuP3evwQsJlAkM2I4BT_-q20'},
//     {name: "Nick Vanderlinden", img:'https://media.licdn.com/dms/image/C4E03AQEIRv986v_S3w/profile-displayphoto-shrink_200_200/0/1642477145946?e=1710979200&v=beta&t=DA4SXNMyf6JsXazch0__KNvcFBli_fsw09cvLgIrdZk'},
//     {name: "Philip Wang", img:'https://media.licdn.com/dms/image/D4E03AQGirSN2OhW6AQ/profile-displayphoto-shrink_200_200/0/1668299725258?e=1710979200&v=beta&t=UZpBQtCvDOhjGh11DTKAzPLk8twu0-s4pacK3GYLwcA'},
//     {name: "Rose J", img:'https://media.licdn.com/dms/image/D4E03AQEKAbGmpfMeGA/profile-displayphoto-shrink_800_800/0/1663893625535?e=1710979200&v=beta&t=ulKgPyIjSY4HtkY8-ZmLvdr1ECTZFtw68z6Xj48SBbY'},
//     {name: "Ryan Stankowitz", img:'https://media.licdn.com/dms/image/D4D03AQEl456Ll6S_0A/profile-displayphoto-shrink_800_800/0/1701220657043?e=1710979200&v=beta&t=3VtXpEejMEuyx3pZRhqDFFACiJzkXYYVH3xUWro0Iys'},
//     {name: "Sean Kil", img:'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'},
//     {name: "Sean Simpson", img:'https://media.licdn.com/dms/image/D5603AQHZCNBhxPcurg/profile-displayphoto-shrink_200_200/0/1689041719257?e=1710979200&v=beta&t=VCCZ-hElY2KlUPXbkJrk74RXeB6TBxTSUNGgHne2m4o'},
//     {name: "Stanley Ho", img:'https://media.licdn.com/dms/image/D4E35AQE7VwM7Jq1QAA/profile-framedphoto-shrink_200_200/0/1703890788057?e=1706043600&v=beta&t=8idrl6WP0DQOYaaNRDQwhAPkKp5pSevt3egQmuoG8Ak'}
//   ];
//   const instructors = [
//     {name: "Brianna Carney", img:'https://media.licdn.com/dms/image/C4E03AQHYgT5k-Ja7VA/profile-displayphoto-shrink_200_200/0/1661191549177?e=1710979200&v=beta&t=oSa6q_kHqXcb2sRr2DJaLgO7bWwwHWZQUMudsx_OpaU'},
//     {name: "Carly Jackson", img:'https://media.licdn.com/dms/image/C4D03AQF1zM9Le3LGJQ/profile-displayphoto-shrink_200_200/0/1661528875796?e=1710979200&v=beta&t=xKZoSoy1cw81pXcz08TbkHv3uNv96pAUhHUBhRL-3-0'},
//     {name: "Michael Clinkscales", img:'https://media.licdn.com/dms/image/C5603AQExrFcQWSoOpQ/profile-displayphoto-shrink_200_200/0/1661536428004?e=1710979200&v=beta&t=5fsP_0X83zUqc9S1BMHqESW6GxZdXFug9jGBaGAOHy8'},
//     {name: "Ryan McDaniel", img:'https://media.licdn.com/dms/image/C5603AQH89aF7fDuxYQ/profile-displayphoto-shrink_200_200/0/1661982850851?e=1710979200&v=beta&t=FXTc62g1RZFwaUj6oSUhLM18eWoO7cNtQHMf0vusE-E'},
//     {name: "Gabby Passentino", img:'https://media.licdn.com/dms/image/D4E03AQEZX0XcA1enBg/profile-displayphoto-shrink_200_200/0/1696968045966?e=1710979200&v=beta&t=McU5nJvGdqP0WmjPfEHWcR7GKDT0dVKvxxaqaYponkw'},
//     {name: "Hazel Bolivar", img:'https://media.licdn.com/dms/image/D4E03AQGBxkedstlsUQ/profile-displayphoto-shrink_200_200/0/1684268823627?e=1710979200&v=beta&t=TMHoI3rgbFRckwFwg7CmEtUtcMoBpZyzIE1OPP-61No'},
//     {name: "Jimmy Tran", img:'https://media.licdn.com/dms/image/D5603AQH2OH8Z8SMwwQ/profile-displayphoto-shrink_200_200/0/1701711185206?e=1710979200&v=beta&t=MDZAvcvBnWJYENbL8fD4aD3ViTZTUlGlQUuz2ZjaI3Y'},
//     {name: "Nathan Gonsalves", img:'https://media.licdn.com/dms/image/D4E03AQHl7kiHMowBiA/profile-displayphoto-shrink_200_200/0/1696963561970?e=1710979200&v=beta&t=ZjEDWDOi2A-iVjCUvf7coeaIHVAd1eM2VNbO4QUqiAk'},
//     {name: "Rodrigo Calderon", img:'https://media.licdn.com/dms/image/C4E03AQFJXsWDyaezVQ/profile-displayphoto-shrink_200_200/0/1652556151773?e=1710979200&v=beta&t=oLm2vqD-NcruErHHO3q01Qzv_6aBMbl40B_641CA8Zc'},
//     {name: "Sean Kelly", img:'https://media.licdn.com/dms/image/D4E03AQHtO2_8V6GXrA/profile-displayphoto-shrink_200_200/0/1691703784512?e=1710979200&v=beta&t=5Smc3FfT4CZZbDuodiGeNouTsTyT5i0a1q6cvzxpfwU'}
//   ];

//   const createResidentTableQuery = `
//     CREATE TABLE IF NOT EXISTS residents (
//       resident_id SERIAL PRIMARY KEY,
//       name VARCHAR(50),
//       phrase VARCHAR(50),
//       comments VARCHAR(255)[],
//       image VARCHAR(255),
//       pronouns VARCHAR(50),
//       password VARCHAR(50),
//       background_color VARCHAR(50)
//     );
//   `;
//   const insertResidentDataQuery = `
//     INSERT INTO residents (name, phrase, comments, 
//                           image, pronouns, password, background_color)
//     VALUES ($1, $2, $3, $4, $5, $6, $7)
//   `;

//   const createInstructorTableQuery = `
//     CREATE TABLE IF NOT EXISTS instructors (
//       instructor_id SERIAL PRIMARY KEY,
//       name VARCHAR(50),
//       phrase VARCHAR(50),
//       comments VARCHAR(255)[],
//       image VARCHAR(255),
//       pronouns VARCHAR(50),
//       password VARCHAR(50),
//       background_color VARCHAR(50)
//     );
//   `;
//   const insertInstructorDataQuery = `
//     INSERT INTO instructors (name, phrase, comments, 
//                             image, pronouns, password, background_color)
//     VALUES ($1, $2, $3, $4, $5, $6, $7)
//     `;
//   try {
//     await pool.query(createResidentTableQuery);
//   } catch (err) {
//     console.log(err);
//   }

//   for(const key of residents){
//     const values = [key.name, "", [], key.img, "", "codesmith", "white"]
//     // console.log(values);
//     // Insert data only if it doesn't already exist
//     try {
//       await pool.query(insertResidentDataQuery, values);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   try {
//     await pool.query(createInstructorTableQuery)
//   } catch (err) {
//     console.log(err);
//   }

//   for(const key of instructors){
//     const values = [key.name, "", [], key.img, "", "codesmith", "white"]
//     // Insert data only if it doesn't already exist
//     try {
//       await pool.query(insertInstructorDataQuery, values)
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return;
// }
// startDb();

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
