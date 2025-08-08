import underconstruction from '../assets/underconstruction.png';

export default function Construction() {
    return (
      <div className="not-found">
        <img src={underconstruction} style={{ width: '100%', height: 'auto', maxWidth: '400px', marginBottom: '5px' }}></img>
        <h1 style={{ fontSize: '3rem', color: 'yellow' }}>
          This page is under construction.
        </h1>
        <p style={{ fontSize: '1rem'}}>
          The force is not strong with this page. Our droids and Jedi knights are currently working to get this back up and running. 
          <br />
          <br />
          <strong>May the force be with you.</strong>
        </p>
      </div>
    );
}