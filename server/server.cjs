require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");

const cors = require("cors");

app.use(cors({ origin: "*" }));
app.use("/", express.static(path.join(__dirname, "/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const PORT = process.env.PORT||3000;
const __path = path.join(__dirname, "/build", "index.html");

const client_id = process.env.NAVER_CLIENT_ID;
const client_secret = process.env.NAVER_CLIENT_SECRET;
const KAKAO_KEY = process.env.REACT_APP_KAKAO_APP_KEY;

// 네이버 지식백과 api
app.get("/search/encyc", function (req, res) {

  const api_url =
    "https://openapi.naver.com/v1/search/encyc?query=" +
    encodeURI(req.query.query); // JSON 결과
  const options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  axios(options)
    .then((response) => {
      console.log("응답:", response);
      res.json({ response: response.data });
    })
    .catch((error) => {
      console.error(error);
    });
});

// 카카오 GPT API
const reqKakaoGpt = async (
  prompt,
  res,
  max_tokens = 28,
  temperature = 1.0,
  top_p = 0.5,
  n = 1
) => {

  const data = JSON.stringify({
    prompt: prompt,
    max_tokens: max_tokens,
    temperature: temperature,
    top_p: top_p,
    n: n,
  });
  const config = {
    "Authorization": "KakaoAK " + KAKAO_KEY,
    "Content-Type": "application/json",
  };

  const URL = "https://api.kakaobrain.com/v1/inference/kogpt/generation";

  axios
    .post(URL, data, {
      headers: config,
    })
    .then((response) => {
      const {id, generations}=response.data
      res.json({id, text:generations[0].text})
    })
    .catch((error) => {
      console.log(error);
    });
};

app.post("/gpt", (req, res) => {
  const prompt = req.body.prompt;
  reqKakaoGpt(prompt,res);

});

app.get("*", (req, res) => {
  res.sendFile(__path);
});

app.listen(PORT, () => {
  console.log(PORT, "포트가 열림");
});


module.exports = app