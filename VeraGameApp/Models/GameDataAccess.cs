using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VeraGameApp.Models;


namespace VeraGameApp.Models
{
    public class GameDataAccess
    {
        masterContext db = new masterContext();
        public IEnumerable<TblGameDes> GetAllGames()
        {
            try
            {
                return db.TblGameDes.ToList();
            }
            catch
            {
                throw;
            }
        }
        //To Add new Game Record     
        public int AddGame(TblGameDes game)
        {
            try
            {
                db.TblGameDes.Add(game);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //To Update the records of a particluar Game   
        public int UpdateGame(TblGameDes game)
        {
            try
            {
                db.Entry(game).State = EntityState.Modified;
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular Game   



        public TblGameDes GetGameData(int id)
        {
            try
            {
                TblGameDes game = db.TblGameDes.Find(id);
                return game;
            }
            catch
            {
                throw;
            }
        }
        //To Delete the record of a particulargame   
        public int DeleteGame(int id)
        {
            try
            {
                TblGameDes game = db.TblGameDes.Find(id);
                db.TblGameDes.Remove(game);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

    }
}