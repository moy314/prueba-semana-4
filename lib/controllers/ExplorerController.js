const ExplorerService =require("../services/ExplorerService");
 const FizzbuzzService  =require("../services/FizzbuzzService");
 const  Reader =require("../utils/Reader");
//const explorers = Reader.readJsonFile("../../explorers.json");


 class ExplorerController{
        
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }


    static getExplorersByStack(stack) {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByStack(explorers, stack);
    }


    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers,mission)


    }



    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);


    }

 }

//console.log(ExplorerController.getExplorersByMission("node"));
//console.log(ExplorerController.getExplorersUsernamesByMission("node"));
//console.log(explorers);
//console.log(ExplorerController.getExplorersByMission("node"));

 module.exports = ExplorerController;