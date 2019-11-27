export const getIllustration = name => {
  let illustration = '';
  switch (name) {
    case 'Blauw glas: doorgaan':
      illustration = require('./blue-cold.png');
      break;

    case 'Blauw glas: gedachten en gevoelens':
      illustration = require('./blue-fear.png');
      break;

    case 'Blauw glas: klein sociaal vangnet':
      illustration = require('./blue-lonely.png');
      break;

    case 'Blauw glas: stress':
      illustration = require('./blue-stress.png');
      break;

    case 'Emmer gaat al lang mee':
      illustration = require('./bucket-rusty.png');
      break;

    case 'Emmer heeft een lichte deuk':
      illustration = require('./bucket-dent.png');
      break;

    case 'Emmer heeft een zware deuk':
      illustration = require('./bucket-dent.png');
      break;

    case 'Emmer is lek':
      illustration = require('./bucket-leaking.png');
      break;

    case 'Emmer is te klein':
      illustration = require('./bucket-small.png');
      break;

    case 'Emmer is tot op de rand gevuld':
      illustration = require('./bucket-edge.png');
      break;

    case 'Groen glas: chemische tekorten in je bloed':
      illustration = require('./green-gas.png');
      break;

    case 'Groen glas: chronische hyperventilatie':
      illustration = require('./green-flu.png');
      break;

    case 'Groen glas: koude':
      illustration = require('./green-scarf.png');
      break;

    case 'Groen glas: onevenwichtige voeding':
      illustration = require('./green-sick.png');
      break;

    case 'Groen glas: uitdroging':
      illustration = require('./green-thirst.png');
      break;

    case 'Oranje glas: andere belastende mechanische factoren':
      illustration = require('./orange-champagne.png');
      break;

    case 'Oranje glas: slapen':
      illustration = require('./orange-sleeping.png');
      break;

    case 'Oranje glas: tillen':
      illustration = require('./weightLift.png');
      break;

    case 'Oranje glas: zitten':
      illustration = require('./orange-sitting.png');
      break;

    case 'Organen':
      illustration = require('./red-stop.png');
      break;

    default:
      illustration = require('./blue-stress.png');
  }

  return illustration;
};
