using System;
using System.Collections.Generic;

namespace VeraGameApp.Models
{
    public partial class TblGameDes
    {
        public int GameId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Remarks{ get; set; }
        public int Rating { get; set; }
    }
}
