import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface FetchGameData {
    gameList: GameData[],
    loading: boolean;
}

export class FetchGame extends React.Component<RouteComponentProps<{}>, FetchGameData> {
    constructor() {
        super();
        this.state = { gameList: [], loading: true };
        fetch('api/Game/Index')
            .then(response => response.json() as Promise<GameData[]>)
            .then(data => {
                this.setState({ gameList: data, loading: false });
            });
        // This binding 
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    public render() {
        
        console.log(this.state.gameList)
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderGameTable(this.state.gameList);
        return <div>
            <h1>Game Description</h1>
            <p>This component demonstrates fetching Game data from the server.</p>
            <p>
                <Link to="/addgame">Create New</Link> 
                <h3> Total No of Games : {this.state.gameList.length}</h3>
            </p>
            {contents}
        </div>;
    }
    // Handle Delete request for a game  
    private handleDelete(id: number) {
        if (!confirm("Do you want to delete game with Id: " + id))
            return;
        else {
            fetch('api/Game/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        gameList: this.state.gameList.filter((rec) => {
                            return (rec.gameId != id);
                        })
                    });
            });
        }
    }
    private handleEdit(id: number) {
        this.props.history.push("/game/edit/" + id);
    }
    // Returns the HTML table to the render() method.  
    private renderGameTable(gameList: GameData[]) {
        console.log(this.state.gameList)

        return <table className='table'>
           
            <thead>
                <tr>
                    <th></th>
                    <th>GameId</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Remarks</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {gameList.map(game =>
                    <tr key={game.gameId}>
                        <td></td>
                        <td>{game.gameId}</td>
                        <td>{game.name}</td>
                        <td>{game.description}</td>
                        <td>{game.remarks}</td>
                        <td> {game.rating}</td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(game.gameId)}>Edit</a>  |
                            <a className="action" onClick={(id) => this.handleDelete(game.gameId)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
        
    }
}
export class GameData {
    gameId: number = 0;
    name: string = "";
    description: string = "";
    remarks: string = "";
    rating: number = 0;

}

