import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Game Description Application</h1>
            <p>Welcome to your new single-page application, built with:</p>
            <ul>
                <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
                <li><a href='https://facebook.github.io/react/'>React</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>
                <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>
                <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
            </ul>
            <p>
                <h1> Prerequisites </h1>
                    <ul>
                        <li>Install .NET Core 2.0.0</li>
                        <li>Install the latest version of Visual Studio 2017 Community Edition</li>
                        <li>Download and install the latest version of Node.js from here.</li>
                        <li>SQL Server 2008 or above.</li>
                     </ul>
            </p>
            <p>
                <h1>Entity Framework Core database used</h1>
                <ul>
                    <li>Install-Package Microsoft.EntityFrameworkCore.SqlServer</li>
                    <li>Install-Package Microsoft.EntityFrameworkCore.Tools</li>
                    <li>Scaffold-DbContext "connection String"</li>
                 
                </ul>
            </p>
      
           
            <p> <h1>Wish List</h1> </p>
                <ul>
                    <li>Add more features eg sort by ranking or sort by game name  </li>
                    <li>Unit tests</li>
                </ul>
           
            <p>To help you get started, we've also set up:</p>
            <ul>
                <li><strong>Client-side navigation</strong>. For example, click <em>Get Games List</em> then <em>Home</em> or<em>VeraGameApp</em> to return Home.</li>
                <li><strong>Webpack dev middleware</strong>. In development mode, there's no need to run the <code>webpack</code> build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.</li>
                <li><strong>Hot module replacement</strong>. In development mode, you don't even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state.</li>
                <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and the <code>webpack</code> build tool produces minified static CSS and JavaScript files.</li>
            </ul>
        </div>;
    }
}
