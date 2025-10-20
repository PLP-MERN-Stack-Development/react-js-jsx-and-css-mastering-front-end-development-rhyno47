import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="space-y-6">
      <Card title="Welcome to React Assignment">
        <p>Navigate using the navbar to see Task Manager and API Demo pages.</p>
      </Card>

      <Card title="Fun Beginner Projects">
        <ul className="list-disc pl-5 space-y-1">
          <li>Personalized Greeting App</li>
          <li>Simple Quiz Game</li>
          <li>Random Joke Generator</li>
        </ul>
        <div className="mt-4 flex gap-2">
          <Link to="/tasks"><Button>Try Tasks</Button></Link>
          <Link to="/api"><Button>API Demo</Button></Link>
        </div>
      </Card>
    </div>
  );
}
