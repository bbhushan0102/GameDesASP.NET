using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VeraGameApp.Models;



namespace VeraGameApp.Controllers
{

    public class GameController : Controller
    {
        GameDataAccess objgame = new GameDataAccess();
        // GET
        [HttpGet]
        [Route("api/Game/Index")]
        public IEnumerable<TblGameDes> Index()
        {
            return objgame.GetAllGames();
        }


        [HttpGet]
        [Route("api/Game/Details/{id}")]
        public TblGameDes Details(int id)
        {
            return objgame.GetGameData(id);
        }

        // POST api/<controller>
        [HttpPost]
        [Route("api/Game/Create")]
        public int Create(TblGameDes game)
        {
            return objgame.AddGame(game);
        }

        [HttpPut]
        [Route("api/Game/Edit")]
        public int Edit(TblGameDes game)
        {
            return objgame.UpdateGame(game);
        }
        [HttpDelete]
        [Route("api/Game/Delete/{id}")]
        public int Delete(int id)
        {
            return objgame.DeleteGame(id);
        }
    }



}
