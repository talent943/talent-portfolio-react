import React from 'react';
import Resume from '../utils/Resume.pdf'
import {Document, Page, pdfjs} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


return (
    <section className="bg-secondery px-5 py-32" id="pdf">
        <a href="/Users/admin/Development/talent-portfolio/talent-portfolio/src/utils/Resume.pdf" target='_blank'>
            <div className='res'>
                <h2 className='heading'> Resume </h2>
                <Document
                    file={resume}
                    onLoadError={console.error}
                    style={{ width: '100vw', height: 'auto'}}
                >
                    <Page pageIndex={0}/>
                </Document>

            </div>
        </a>
    </section>
)