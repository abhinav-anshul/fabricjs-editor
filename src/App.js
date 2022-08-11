import { useEffect, useState } from "react"
import { fabric } from "fabric"
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react"
import "./App.css"
import ImagesItem from "./components/ImagesItem"
import useAppContext from "./hooks/useAppContext"
import Text from "./components/Text"

function App() {
  const { editor, onReady } = useFabricJSEditor()
  const { activeDragDropItem } = useAppContext()
  const [transperancy, setTransperancy] = useState(1)
  const [shadow, setShadow] = useState(0)
  const [blur, setBlur] = useState(0)

  const handleRemove = () => {
    let selection = editor.canvas.getActiveObject()
    if (selection) {
      if (selection.type === "activeSelection") {
        selection.forEachObject(function (element) {
          editor.canvas.remove(element)
        })
      } else {
        editor.canvas.remove(selection)
      }
      editor.canvas.discardActiveObject()
    }
  }

  useEffect(() => {
    if (editor) {
      editor.canvas.setHeight(500)
      editor.canvas.setWidth(500)
    }
  }, [])

  useEffect(() => {
    if (window !== undefined) {
      window.onkeydown = function (e) {
        if (e.code == "Delete") {
          console.info("---------------------------------")
          console.info("e =>", e)
          console.info("---------------------------------")
          handleRemove()
        }
      }
    }
  }, [window])

  const handleDrop = (e) => {
    e.preventDefault()
    if (activeDragDropItem) {
      if (activeDragDropItem.type === "image") {
        fabric.Image.fromURL(activeDragDropItem.src, function (oImg) {
          oImg.scale(0.2)
          oImg.top = e.nativeEvent.layerY
          oImg.left = e.nativeEvent.layerX
          editor.canvas.add(oImg)
        })
      }

      if (activeDragDropItem.type === "HeadingWithSubHeading") {
        let items = activeDragDropItem.metadata.reduce((prev, item) => {
          let obj = new fabric.Textbox(item.text, {
            left: e.nativeEvent.layerX,
            top: e.nativeEvent.layerY,
            editable: false,
          })

          if (prev) {
            obj.top = prev?.top + prev?.height + 10
          }

          editor.canvas.add(obj)
          editor.canvas.renderAll()

          return obj
        }, null)
      }
      console.info("---------------------------------")
      console.info("activeDragDropItem =>")
      console.info("---------------------------------")
    }
  }

  const handleGroup = () => {
    let canvas = editor.canvas
    if (!canvas.getActiveObject()) return
    if (canvas.getActiveObject().type !== "activeSelection") return

    canvas.isDrawingMode = false
    let activeObjects = canvas.getActiveObjects()
    let aObj = canvas.getActiveObject()

    let grp = new fabric.Group(activeObjects, {
      left: aObj.left,
      top: aObj.top,
    })
    canvas.add(grp)
    for (var i = 0; i < activeObjects.length; i++) {
      canvas.remove(activeObjects[i])
    }
    canvas.renderAll()
  }

  const handleUngroup = () => {
    let canvas = editor.canvas
    let obj = canvas.getActiveObject()

    if (!obj || obj.type != "group") return

    var items = obj._objects
    obj.destroy()
    canvas.remove(obj)
    for (var i = 0; i < items.length; i++) {
      canvas.add(items[i])
    }
    canvas.renderAll()
  }

  const handleExport = () => {
    let json = editor.canvas.toSVG()
    console.info("---------------------------------")
    console.info("json =>", json)
    console.info("---------------------------------")
  }

  const handleLoad = () => {
    editor.canvas.loadFromJSON(
      {
        version: "5.2.1",
        objects: [
          {
            type: "image",
            version: "5.2.1",
            originX: "left",
            originY: "top",
            left: 43,
            top: 149,
            width: 612,
            height: 459,
            fill: "rgb(0,0,0)",
            stroke: null,
            strokeWidth: 0,
            strokeDashArray: null,
            strokeLineCap: "butt",
            strokeDashOffset: 0,
            strokeLineJoin: "miter",
            strokeUniform: false,
            strokeMiterLimit: 4,
            scaleX: 0.2,
            scaleY: 0.2,
            angle: 0,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: null,
            visible: true,
            backgroundColor: "",
            fillRule: "nonzero",
            paintFirst: "fill",
            globalCompositeOperation: "source-over",
            skewX: 0,
            skewY: 0,
            cropX: 0,
            cropY: 0,
            src: "https://media.gettyimages.com/photos/the-rising-up-arrow-on-the-mountain-with-sunlight-from-behind-and-picture-id1354545637?b=1&k=20&m=1354545637&s=612x612&h=hACM-f0GEW1OWt7o9j63x0JJAndoBxXLwqxMcdoscPo=",
            crossOrigin: null,
            filters: [],
          },
          {
            type: "group",
            version: "5.2.1",
            originX: "left",
            originY: "top",
            left: 256,
            top: 104,
            width: 181.4,
            height: 198.6,
            fill: "rgb(0,0,0)",
            stroke: null,
            strokeWidth: 0,
            strokeDashArray: null,
            strokeLineCap: "butt",
            strokeDashOffset: 0,
            strokeLineJoin: "miter",
            strokeUniform: false,
            strokeMiterLimit: 4,
            scaleX: 1,
            scaleY: 1,
            angle: 0,
            flipX: false,
            flipY: false,
            opacity: 1,
            shadow: null,
            visible: true,
            backgroundColor: "",
            fillRule: "nonzero",
            paintFirst: "fill",
            globalCompositeOperation: "source-over",
            skewX: 0,
            skewY: 0,
            objects: [
              {
                type: "image",
                version: "5.2.1",
                originX: "left",
                originY: "top",
                left: -31.7,
                top: -99.3,
                width: 612,
                height: 408,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeDashOffset: 0,
                strokeLineJoin: "miter",
                strokeUniform: false,
                strokeMiterLimit: 4,
                scaleX: 0.2,
                scaleY: 0.2,
                angle: 0,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                skewX: 0,
                skewY: 0,
                cropX: 0,
                cropY: 0,
                src: "https://media.gettyimages.com/photos/glowing-wireframe-graph-model-picture-id1078283624?b=1&k=20&m=1078283624&s=612x612&h=Sml5Yrx1JnjsRwWLT37-yihShJfQUu5F-pgZom-rRT8=",
                crossOrigin: null,
                filters: [],
              },
              {
                type: "image",
                version: "5.2.1",
                originX: "left",
                originY: "top",
                left: -90.7,
                top: 17.7,
                width: 612,
                height: 408,
                fill: "rgb(0,0,0)",
                stroke: null,
                strokeWidth: 0,
                strokeDashArray: null,
                strokeLineCap: "butt",
                strokeDashOffset: 0,
                strokeLineJoin: "miter",
                strokeUniform: false,
                strokeMiterLimit: 4,
                scaleX: 0.2,
                scaleY: 0.2,
                angle: 0,
                flipX: false,
                flipY: false,
                opacity: 1,
                shadow: null,
                visible: true,
                backgroundColor: "",
                fillRule: "nonzero",
                paintFirst: "fill",
                globalCompositeOperation: "source-over",
                skewX: 0,
                skewY: 0,
                cropX: 0,
                cropY: 0,
                src: "https://media.gettyimages.com/vectors/statistic-mountain-logo-template-design-vector-emblem-design-concept-vector-id1328631070?b=1&k=20&m=1328631070&s=612x612&h=3S6HrxwOiJbJ44d80CagR0xcuVqRMylSuzSnNDBhDIQ=",
                crossOrigin: null,
                filters: [],
              },
            ],
          },
        ],
      },
      function (json) {
        editor.canvas.requestRenderAll()
        console.info("---------------------------------")
        console.info("json =>", json)
        console.info("---------------------------------")
      }
    )
  }

  const handleForward = () => {
    editor.canvas.bringForward(editor.canvas.getActiveObject())
  }

  const handleFront = () => {
    editor.canvas.bringToFront(editor.canvas.getActiveObject())
  }

  const handleBackward = () => {
    editor.canvas.sendBackwards(editor.canvas.getActiveObject())
  }

  const handleBack = () => {
    editor.canvas.sendToBack(editor.canvas.getActiveObject())
  }

  const handleAlignment = (type = "") => {
    let activeObj = editor.canvas.getActiveObject()
    switch (type) {
      case "hleft":
        activeObj.set({ left: 0 })
        break

      case "hcenter":
        activeObj.centerH()
        break

      case "hright":
        activeObj.set({
          left: editor.canvas.width - activeObj.width * activeObj.scaleX,
        })
        break

      case "top":
        activeObj.set({ top: 0 })
        break

      case "vcenter":
        activeObj.centerV()
        break

      case "bottom":
        activeObj.set({
          top: editor.canvas.height - activeObj.height * activeObj.scaleY,
        })
        break

      default:
        break
    }
    activeObj.setCoords()
    editor.canvas.renderAll()
  }

  const handleChangeSlider = (type = "", value) => {
    if (type === "") return
    if (type === "trans") {
      setTransperancy(value)
      editor.canvas.getActiveObject().set({ opacity: value })
    } else if (type === "shadow") {
      setShadow(value)
      editor.canvas.getActiveObject().set({
        shadow: { ...editor.canvas.getActiveObject().shadow, offsetX: value },
      })
    } else if (type === "blur") {
      setBlur(value)
      // editor?.canvas?.getActiveObject()?.filters?.push({
      //   blur: 0.5,
      //   horizontal: false,
      //   aspectRatio: 1,
      // })
      // editor.canvas.getActiveObject().set({
      //   Blur: 0.2,
      // })

      let test = new fabric.Image.filters.Blur({
        blur: Number(value),
        horizontal: false,
        aspectRatio: 1,
      })

      editor?.canvas?.getActiveObject()?.filters?.push(test)

      console.log("canvas", editor?.canvas?.getActiveObject())
      // editor?.canvas?.getActiveObject()?.applyFilters()
    }
    editor.canvas.renderAll()
  }

  const handleRotate = (angleOffset) => {
    console.log(angleOffset)
    let obj = editor.canvas.getActiveObject()
    if (!obj) return
    let angle = obj.angle + angleOffset
    console.log("objangle", obj)
    angle = angle > 360 ? 90 : angle < 0 ? 270 : angle
    obj
      .set({
        angle: angle,
        left: obj.getCenterPoint().x,
        top: obj.getCenterPoint().y,
        originX: "center",
        originY: "center",
      })
      .setCoords()
    editor.canvas.renderAll()
  }

  const handleLink = () => {}

  return (
    <div className="App">
      <button onClick={handleGroup}>Group</button>
      <button onClick={handleUngroup}>Ungroup</button>
      <br />
      <button onClick={handleForward}>To Forward</button>
      <button onClick={handleFront}>To Front</button>
      <button onClick={handleBackward}>To Backward</button>
      <button onClick={handleBack}>To Back</button>
      <br />
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleExport}>Export</button>
      <button onClick={handleLoad}>Load JSON</button>
      <br />
      <button onClick={() => handleAlignment("top")}>V Top</button>
      <button onClick={() => handleAlignment("vcenter")}>V Center</button>
      <button onClick={() => handleAlignment("bottom")}>V Bottom</button>
      <br />
      <button onClick={() => handleAlignment("hleft")}>H Left</button>
      <button onClick={() => handleAlignment("hcenter")}>H Center</button>
      <button onClick={() => handleAlignment("hright")}>H Right</button>
      {/* <button onClick={() => handleCrop("crop")}>Crop</button> */}
      <br />
      <div>
        Transparency
        <input
          type="range"
          min="0"
          max="1"
          step={0.1}
          value={editor?.canvas?.getActiveObject()?.opacity || 0}
          onChange={(e) => handleChangeSlider("trans", e.target.value)}
        />{" "}
        <span>{parseInt(editor?.canvas?.getActiveObject()?.opacity * 100 || 0)}</span>
      </div>
      <div>
        Shadow
        <input
          id="shadow"
          type="range"
          min="0"
          max="100"
          value={editor?.canvas?.getActiveObject()?.shadow?.offsetX || 0}
          onChange={(e) => handleChangeSlider("shadow", e.target.value)}
        ></input>
        <span>{parseInt(editor?.canvas?.getActiveObject()?.shadow?.offsetX || 0)}</span>
      </div>
      <div>
        Blur
        <input
          id="blur"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={editor?.canvas?.getActiveObject()?.filters?.slice(-1)[0]?.blur || 0}
          onChange={(e) => handleChangeSlider("blur", e?.target?.value)}
        ></input>
        <span>{editor?.canvas?.getActiveObject()?.filters.slice(-1)[0]?.blur || 0}</span>
      </div>
      <br />
      <button onClick={() => handleRotate(-90)}>Rotate left</button>
      <button onClick={() => handleRotate(90)}>Rotate right</button>
      <br />
      <button onClick={handleLink}>Link</button>
      <ImagesItem />
      <Text />
      <div id="canvas-container" onDrop={handleDrop}>
        <FabricJSCanvas className="sample-canvas" onReady={onReady} />
      </div>
    </div>
  )
}

export default App
