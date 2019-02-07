import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { GameData } from './FetchGame';
interface AddGameData {
    title: string;
    loading: boolean;
    gameData: GameData;


}
export class AddGame extends React.Component<RouteComponentProps<{id}>, AddGameData> {
    constructor(id) {
        super(id);
        this.state = { title: "", loading: true, gameData: new GameData };

        var gameid = id.match.params["gameid"];
        console.log(gameid);

        // Edit Game  
        if (id > 0) {
            fetch('api/Game/Details/' + gameid)
                .then(response => response.json() as Promise<GameData>)
                .then(data => {
                    console.log(data)
                    this.setState({ title: "Edit", loading: false, gameData: data });
                });
        }
        //  Add game  
        else {
            this.state = { title: "Create", loading: false, gameData: new GameData };
        }
        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }
    public render() {
        console.log(this.state)
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();
        return <div>
            <h1>{this.state.title}</h1>
            <h3> Ad New Game Description</h3>
            <hr />
            {contents}
        </div>;
    }
    // This will handle the submit form event.  
    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data)
        // PUT request for Edit Game.  
        if (this.state.gameData.gameId) {
            fetch('api/Game/Edit', {
                method: 'PUT',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchgame");
                })
        }
        // POST request for Add Game.  
        else {
            fetch('api/Game/Create', {
                method: 'POST',
                body: data,
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchgame");
                })
        }
    }
    // This will handle Cancel button click event.  
    private handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/fetchgame");
    }

    // Returns the HTML Form to the render() method.  
    private renderCreateForm() {
        console.log(this.state);
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row" >
                    <input type="hidden" name="gameId" value={this.state.gameData.gameId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" defaultValue={this.state.gameData.name} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="description">Description</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="description" defaultValue={this.state.gameData.description} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="remarks" >Remarks</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="remarks" defaultValue={this.state.gameData.remarks} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="rating"> </label>
                    <div className="col-md-4">
                        <input className="form-control" type="number" min="0" max="10" name="rating" placeholder="rating 1 to 10" required />

                    </div>
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }

}
