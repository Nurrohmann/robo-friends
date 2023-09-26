import { Card } from '../Card/Card';
import { Robots } from './robots';

export const CardList = () => {
  const LoopCard = Robots.map((user) => {
    return <Card id={user.id} name={user.name} email={user.email} />;
  });

  return <>{LoopCard}</>;
};