import axios from "axios"
import { BASE_URL }from "./request/config"

console.log("---------------")

axios.defaults.baseURL = BASE_URL

// axios.get("/", {
//   params: {
//     id: 1024
//   }
// }).then((res) => {
//   console.log(res.data)
// })

axios.post("/?", {
  params: {
    name: "kobe"
  }
}).then((res) => {
  console.log(res.data.params.name)
})
