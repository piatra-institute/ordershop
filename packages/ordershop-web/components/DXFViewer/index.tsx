'use client';

import {
    useRef,
    useEffect,
} from 'react';

import * as three from 'three';
import {
    DxfViewer,
} from 'dxf-viewer';
// import DxfViewerWorker from './DxfViewerWorker';



export default function DXFViewer({
    url,
}: {
    url: string;
}) {
    const workerRef = useRef<Worker>();
    const dxfViewerRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (!dxfViewerRef.current || !url) {
            return;
        }

        const dxfViewer = new DxfViewer(dxfViewerRef.current, {
            canvasWidth: 900,
            canvasHeight: 900,
            autoResize: true,
            clearColor: new three.Color("#000000"),
            clearAlpha: 1,
            canvasAlpha: false,
            canvasPremultipliedAlpha: true,
            antialias: true,
            colorCorrection: true,
            blackWhiteInversion: false,
            pointSize: 1,
            sceneOptions: {
                wireframeMesh: true,
                arcTessellationAngle: 0.1,
                minArcTessellationSubdivisions: 10,
                suppressPaperSpace: true,
                textOptions: {
                    curveSubdivision: 12,
                    fallbackChar: '',
                },
            },
            retainParsedDxf: false,
            preserveDrawingBuffer: false,
            fileEncoding: 'utf-8',
        });

        // workerRef.current = new Worker(new URL('../../DxfViewerWorker.ts', import.meta.url));

        dxfViewer.Load({
            url,
            fonts: null,
            progressCbk: (progress) => {},
            workerFactory: null,
            // workerFactory: DxfViewerWorker,
            // workerFactory: () => workerRef.current,
        });

        return () => {

        }
    }, [
        url,
    ]);


    return (
        <div
            className="grid place-items-center h-screen"
        >
            <div>
                DXF
            </div>

            <div
                ref={dxfViewerRef}
                style={{
                    width: '900px',
                    height: '900px',
                }}
            />
        </div>
    );
}
