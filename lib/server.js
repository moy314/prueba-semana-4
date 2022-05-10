const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission",(request,response) => {

    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);

})

///////////////////////////////////////////////////////////////////


app.get("/v1/explorers/amount/:mission",(request,response) => {

    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({"mission": mission, "amount" :explorersAmountInMission});

})


app.get("/v1/explorers/usernames/:mission",(request,response) => {

    const mission = request.params.mission;
    const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({"mission": mission, "explorers" :explorersUsernames});

})


