  import '../assets/styles/results.css'
  import { IoCloudDownloadOutline } from "react-icons/io5";
  import cardHeader from '../assets/images/card-header.png';
  import { grades } from '../data'
  
  
  const ResultTable = ({resultData, handleDownloadPdf }) => (
    <>
    <div className="result__container">
        <header className='result__header'>
            <img src={cardHeader} alt="" />

            <h4>{resultData.term} RESULT</h4>

            <p>{resultData.academicYear} ACADEMIC SESSION</p>
        </header>

        <section className="result__student-info">
            <div>
                <div className="name"><span>NAME:</span> {resultData.student.firstName}</div>
                <div className="class"><span>CLASS:</span> {resultData.class}</div>
            </div>

            <div>
                <div className="number"><span>TOTAL NO. CLASS:</span> 11</div>
                <div className="position"><span>POSITION:</span> 2ND</div>
            </div>
        </section>

        <section className="result__body">
            <table>
                <thead>
                    <tr>
                        <th>SUBJECTS</th>
                        <th>CA (30%)</th>
                        <th>EXAM (70%)</th>
                        <th>TOTAL (100%)</th>
                        <th>REMARK</th>
                        <th>Class Lowest</th>
                        <th>Class Highest</th>
                    </tr>
                </thead>

                <tbody>
                    {resultData.subjectResults.map((sub, index) => (
                        <tr key={index}>
                            <td>{sub.subjectName}</td>
                            <td>{sub.testScore}</td>
                            <td>{sub.examScore}</td>
                            <td>{sub.totalScore}</td>
                            <td>Excellence</td>
                            <td>33</td>
                            <td>79</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>

        <section className="result__conclusion">
            <div className="result__percentage">
                <div><span>Total Mark Obtainable: </span> 1500</div>
                <div><span>Mark Obtained: </span> 1048</div>
                <div><span>Percentage: </span> {resultData.overallPercentage.toFixed(2)}%</div>
            </div>

            <div className="result__base">
                <div className='result__comments'>
                    <div>
                        <span>Class Teacher's Comment:</span>
                        <span>He is capable of achieving a higher grade but he needs monitoring to make progress</span>
                    </div>

                    <div>
                        <span>Principal's Comment:</span>
                        <span>He is capable of achieving a higher grade but he needs monitoring to make progress</span>
                    </div>


                </div>

                <div className="grading-system">
                    <div className='grading-system__head'>GRADING SYSTEM</div>
                    <table>
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Point</th>
                            </tr>
                        </thead>

                        <tbody>
                            {grades.map((grade) => (
                                <tr key={grade.id}>
                                    <td>{grade.score}</td>
                                    <td>{grade.remark}</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>

            <p className='result__motto'>KNOWLEDGE VIRTUES AND EXCELLENCE</p>
        </section>
    </div>

    <button className="download-btn" onClick={handleDownloadPdf}>
        <span>Download Results Sheet</span>
        <span><IoCloudDownloadOutline /></span>
    </button>
    </>
  );


  export default ResultTable;