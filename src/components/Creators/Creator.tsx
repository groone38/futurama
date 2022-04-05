import React, { FC } from "react";
import { ICreator } from "../../type/type";

interface CreatorProps {
    item: ICreator
}

const Creator: FC<CreatorProps> = ({item}) => {
    return (
        <div className="col-sm-6">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  <strong>Url:</strong> {item.url}
                </p>
                <a href={item.url} className="btn btn-outline-secondary">
                  Go somewhere
                </a>
              </div>
          </div>
        </div>
    )
}

export default Creator