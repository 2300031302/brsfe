import React from 'react'
import './Test.css';

const bus = {
  name: "aero travels",
  from: "Mumbai",
  to: "Pune",
  seats: {
    lower: {
      left: {
        up: { a1: true, b1: false, c1: false, d1: false, e1: false, f1: false, g1: true, h1: true },
        down: { a2: true, b2: true, c2: false, d2: false, e2: true, f2: true, g2: true, h2: true }
      },
      right: {
        up: { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: false },
        down: { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
      }
    }
  }
};

seats= [
  [
    [
      { a1:true, b1:false, c1:false, d1:false, e1:false, f1:false, g1:true, h1:true },
      { a2:true, b2:true, c2:false, d2:false, e2:true, f2:true, g2:true, h2:true }
    ],
    [
      { a3:true, b3:true, c3:true, d3:true, e3:true, f3:true, g3:true, h3:false },
      { a4:true, b4:true, c4:true, d4:true, e4:true, f4:true, g4:true, h4:true }
    ]
  ]
]


const Test = () => {
  const seats = [
    [
      [
        { a1: true, b1: false, c1: false, d1: false, e1: false, f1: false, g1: true, h1: true },
        { a2: true, b2: true, c2: false, d2: false, e2: true, f2: true, g2: true, h2: true }
      ],
      [
        { a3: true, b3: true, c3: true, d3: true, e3: true, f3: true, g3: true, h3: false },
        { a4: true, b4: true, c4: true, d4: true, e4: true, f4: true, g4: true, h4: true }
      ]
    ]
  ];

  return (
    <div className="bus-seats">
      {seats.map((bus, busIndex) => (
        <div key={busIndex} className="section-container">
          {bus.map((section, sectionIndex) => (
            <div key={sectionIndex} className="section">
              {section.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                  {Object.entries(row).map(([key, value]) => (
                    <div
                      key={key}
                      className={`seat ${value ? 'visible' : 'hidden'}`}
                    >
                      {value ? key : ''}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Test
