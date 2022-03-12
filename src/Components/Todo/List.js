import React from "react";

const List = ({ list, deleteItem }) => {
    return (
        <div>
            <h2>List of Items</h2>
            {list.map((item, i) => (
                <ul class="paragraph-ul">
                    <li>
                        {item}
                        <button
                            className="removeBtn"
                            onClick={() => deleteItem(i)}
                        >
                            Delete
                        </button>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default List;
