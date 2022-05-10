

class ExplorerService{

    static filterByMission(explorers, mission){

       return explorers.filter((explorer) => explorer.mission == mission);

    }
    static getAmountOfExplorersByMission(explorers, mission){

        //return explorers.filter((explorer) => explorer.mission == mission).length;
        return ExplorerService.filterByMission(explorers,mission).length
        

    }
    static getExplorersUsernamesByMission(explorers, mission){

        return ExplorerService.filterByMission(explorers,mission).map((explorer) => explorer.githubUsername);

        

    }


    static filterByStack(explorers, stack) {
        return explorers.filter((explorer) => explorer.stacks.includes(stack));
    }



  

        }

module.exports = ExplorerService