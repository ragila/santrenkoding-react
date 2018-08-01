import React from 'react';
import { Jumbotron } from 'reactstrap';
import './Style.css';

const Example = props => {
  return (
    <div>
      <Jumbotron className="Jumbotron fluid text-center text-white">
        <h1 className="display-3">Belajar Jadi Asyik</h1>
        <p className="lead">
          Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren
          Koding.
        </p>
        <br />
        <a href="#pelatihan" class="btn btn-success btn-lg">
          Mulai Belajar
        </a>
      </Jumbotron>
    </div>
  );
};

export default Example;
