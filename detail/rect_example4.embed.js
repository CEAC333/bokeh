console.log("embed.js");

(function(global) {

    var host = "../";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "rect_example4"}, "id": "04ae49d7-5772-434c-b925-fac9e58a8b3a", "doc": null}, "type": "ResizeTool", "id": "04ae49d7-5772-434c-b925-fac9e58a8b3a"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "32625f68-eb1b-4e45-b17e-5136a22b371e"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "572d3368-ef3d-43cc-a5e5-d962740fec4d"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "707e9e16-934f-4780-a79b-4c6becfe7ecd"}, {"type": "LinearAxis", "id": "c793b1f2-bec4-4c70-b9ab-df5057ba5eeb"}, {"type": "Grid", "id": "137499fa-15e4-4ed0-8422-a88668d6e2fe"}, {"type": "Grid", "id": "c8dd549f-86c7-488b-a853-9797e3f4d091"}, {"type": "GlyphRenderer", "id": "c825723f-2f0b-49bc-98be-947fe0eee9be"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "rect_example4", "tools": [{"type": "PanTool", "id": "fef5251e-9434-44ab-b49c-3092f8d989a8"}, {"type": "ZoomTool", "id": "e6f85769-2c6e-43cb-8012-1f744e47a8c8"}, {"type": "ResizeTool", "id": "04ae49d7-5772-434c-b925-fac9e58a8b3a"}], "canvas_width": 600}, "type": "Plot", "id": "rect_example4"}, {"attributes": {"plot": {"type": "Plot", "id": "rect_example"}, "doc": null, "dimension": 0, "id": "d38c5cde-c557-4531-b41d-d00db872f281"}, "type": "Grid", "id": "d38c5cde-c557-4531-b41d-d00db872f281"}, {"attributes": {"plot": {"type": "Plot", "id": "rect_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "0873a5ba-e97b-4c48-9c28-3755378bfc5b", "dimension": 0}, "type": "LinearAxis", "id": "0873a5ba-e97b-4c48-9c28-3755378bfc5b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "2f441c8b-8ed7-4067-bd87-4e6de86fb2b1"}, "columns": ["x"]}], "id": "32625f68-eb1b-4e45-b17e-5136a22b371e", "doc": null}, "type": "DataRange1d", "id": "32625f68-eb1b-4e45-b17e-5136a22b371e"}, {"attributes": {"plot": {"type": "Plot", "id": "rect_example4"}, "location": "min", "bounds": "auto", "doc": null, "id": "c793b1f2-bec4-4c70-b9ab-df5057ba5eeb", "dimension": 1}, "type": "LinearAxis", "id": "c793b1f2-bec4-4c70-b9ab-df5057ba5eeb"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "b4185475-5a6b-4d1d-8f04-91f4e9d79453"}, {"type": "DataRange1d", "id": "5713a3b1-96f5-4f38-b0b0-5121755eb326"}], "dimensions": ["width", "height"], "id": "a54c4c83-6a34-4992-ab2c-cf7f528c57b2"}, "type": "ZoomTool", "id": "a54c4c83-6a34-4992-ab2c-cf7f528c57b2"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "32625f68-eb1b-4e45-b17e-5136a22b371e"}, {"type": "DataRange1d", "id": "572d3368-ef3d-43cc-a5e5-d962740fec4d"}], "dimensions": ["width", "height"], "doc": null, "id": "fef5251e-9434-44ab-b49c-3092f8d989a8"}, "type": "PanTool", "id": "fef5251e-9434-44ab-b49c-3092f8d989a8"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "rect_example"}, {"type": "Plot", "id": "a152ee80-32e2-4b62-8235-70970166c801"}, {"type": "Plot", "id": "rect_example4"}], "id": "6ab6586f-7b6e-49f6-95a6-71f33e75771b"}, "type": "PlotContext", "id": "6ab6586f-7b6e-49f6-95a6-71f33e75771b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8fa794c8-5a9b-4812-a469-699279b68c0f"}, "columns": ["x"]}], "id": "b4185475-5a6b-4d1d-8f04-91f4e9d79453", "doc": null}, "type": "DataRange1d", "id": "b4185475-5a6b-4d1d-8f04-91f4e9d79453"}, {"attributes": {"plot": {"type": "Plot", "id": "rect_example4"}, "location": "min", "bounds": "auto", "doc": null, "id": "707e9e16-934f-4780-a79b-4c6becfe7ecd", "dimension": 0}, "type": "LinearAxis", "id": "707e9e16-934f-4780-a79b-4c6becfe7ecd"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "ed7a8d84-e8d0-47ef-beb9-b52fdb60e8ed"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "2db628f7-b6b1-45dc-bc72-fc7783eb6d4e"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "f6f3bb30-1d53-428a-b8df-a097b1aa8dc4"}, {"type": "LinearAxis", "id": "d6f308a5-19d7-456a-b8af-e269158ca89a"}, {"type": "Grid", "id": "b0af469b-4e16-404f-b74a-7726837c0424"}, {"type": "Grid", "id": "a6c6fd8d-3089-4ba0-b61e-607629d869b5"}, {"type": "GlyphRenderer", "id": "8a79ae00-f4d2-492b-b09f-87448168a353"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "a152ee80-32e2-4b62-8235-70970166c801", "tools": [{"type": "PanTool", "id": "80ffe6da-e267-4f7b-9d3d-b8ce5fa8bab3"}, {"type": "ZoomTool", "id": "cc9b5208-efc3-45a0-8eec-74615ec5c9bd"}, {"type": "ResizeTool", "id": "4018cbf3-25c8-4655-8f64-c8ec6338e962"}], "canvas_width": 600}, "type": "Plot", "id": "a152ee80-32e2-4b62-8235-70970166c801"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.15839802440721498, 0.31279660702222717, 0.45929728922297797, 0.5942010289717106, 0.7141015990967496, 0.815971592199161, 0.8972388606192122, 0.9558514614057608, 0.9903294664725019, 0.9998023297700656, 0.9840308679784207, 0.9434132997221345, 0.8789751908224336, 0.7923435594615744, 0.6857057950864132, 0.5617544283207707, 0.4236191464085279, 0.27478777075102506, 0.11901819180190486, -0.03975651509692564, -0.19752739717795278, -0.35031084756382447, -0.4942491886167231, -0.6257080756605602, -0.7413682616986181, -0.8383094061302768, -0.9140838113540347, -0.966778225458037, -0.9950621505224275, -0.998221436781933, -0.9761763144190507, -0.929483407697387, -0.8593216805796612, -0.7674626686939078, -0.6562257492703756, -0.528419578452619, -0.3872711746506408, -0.23634443853290504, -0.079450166971714, 0.07945016697171439, 0.23634443853290543, 0.38727117465064126, 0.5284195784526193, 0.6562257492703759, 0.7674626686939079, 0.8593216805796613, 0.9294834076973871, 0.976176314419051, 0.9982214367819331, 0.9950621505224274, 0.966778225458037, 0.9140838113540342, 0.8383094061302766, 0.7413682616986179, 0.6257080756605592, 0.4942491886167231, 0.35031084756382413, 0.19752739717795192, 0.03975651509692613, -0.11901819180190482, -0.27478777075102584, -0.42361914640852905, -0.5617544283207707, -0.6857057950864135, -0.7923435594615749, -0.8789751908224336, -0.9434132997221346, -0.9840308679784208, -0.9998023297700656, -0.9903294664725019, -0.9558514614057606, -0.8972388606192118, -0.815971592199161, -0.7141015990967494, -0.5942010289717097, -0.4592972892229782, -0.31279660702222695, -0.15839802440721423, -4.898587196589413e-16], "x": [0.0, 0.1590679824602427, 0.3181359649204854, 0.47720394738072813, 0.6362719298409708, 0.7953399123012135, 0.9544078947614563, 1.1134758772216988, 1.2725438596819416, 1.4316118421421844, 1.590679824602427, 1.7497478070626697, 1.9088157895229125, 2.0678837719831553, 2.2269517544433977, 2.3860197369036404, 2.5450877193638832, 2.704155701824126, 2.863223684284369, 3.022291666744611, 3.181359649204854, 3.3404276316650967, 3.4994956141253395, 3.6585635965855823, 3.817631579045825, 3.9766995615060674, 4.135767543966311, 4.294835526426553, 4.453903508886795, 4.6129714913470385, 4.772039473807281, 4.931107456267524, 5.0901754387277665, 5.249243421188009, 5.408311403648252, 5.567379386108494, 5.726447368568738, 5.88551535102898, 6.044583333489222, 6.2036513159494655, 6.362719298409708, 6.521787280869951, 6.680855263330193, 6.839923245790436, 6.998991228250679, 7.158059210710921, 7.317127193171165, 7.476195175631407, 7.63526315809165, 7.7943311405518925, 7.953399123012135, 8.112467105472378, 8.271535087932621, 8.430603070392863, 8.589671052853106, 8.74873903531335, 8.90780701777359, 9.066875000233834, 9.225942982694077, 9.385010965154319, 9.544078947614562, 9.703146930074805, 9.862214912535048, 10.02128289499529, 10.180350877455533, 10.339418859915776, 10.498486842376018, 10.65755482483626, 10.816622807296504, 10.975690789756747, 11.134758772216989, 11.293826754677232, 11.452894737137475, 11.611962719597717, 11.77103070205796, 11.930098684518203, 12.089166666978445, 12.248234649438688, 12.407302631898931, 12.566370614359172]}, "id": "2f441c8b-8ed7-4067-bd87-4e6de86fb2b1"}, "type": "ColumnDataSource", "id": "2f441c8b-8ed7-4067-bd87-4e6de86fb2b1"}, {"attributes": {"plot": {"type": "Plot", "id": "a152ee80-32e2-4b62-8235-70970166c801"}, "id": "4018cbf3-25c8-4655-8f64-c8ec6338e962", "doc": null}, "type": "ResizeTool", "id": "4018cbf3-25c8-4655-8f64-c8ec6338e962"}, {"attributes": {"plot": {"type": "Plot", "id": "a152ee80-32e2-4b62-8235-70970166c801"}, "doc": null, "dimension": 1, "id": "a6c6fd8d-3089-4ba0-b61e-607629d869b5"}, "type": "Grid", "id": "a6c6fd8d-3089-4ba0-b61e-607629d869b5"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "18d7501e-7ff6-4482-99dc-3d06f018c8db"}, "columns": ["y"]}], "id": "2db628f7-b6b1-45dc-bc72-fc7783eb6d4e", "doc": null}, "type": "DataRange1d", "id": "2db628f7-b6b1-45dc-bc72-fc7783eb6d4e"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8fa794c8-5a9b-4812-a469-699279b68c0f"}, "columns": ["y"]}], "id": "5713a3b1-96f5-4f38-b0b0-5121755eb326", "doc": null}, "type": "DataRange1d", "id": "5713a3b1-96f5-4f38-b0b0-5121755eb326"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "18d7501e-7ff6-4482-99dc-3d06f018c8db"}, "columns": ["x"]}], "id": "ed7a8d84-e8d0-47ef-beb9-b52fdb60e8ed", "doc": null}, "type": "DataRange1d", "id": "ed7a8d84-e8d0-47ef-beb9-b52fdb60e8ed"}, {"attributes": {"plot": {"type": "Plot", "id": "a152ee80-32e2-4b62-8235-70970166c801"}, "doc": null, "dimension": 0, "id": "b0af469b-4e16-404f-b74a-7726837c0424"}, "type": "Grid", "id": "b0af469b-4e16-404f-b74a-7726837c0424"}, {"attributes": {"plot": {"type": "Plot", "id": "a152ee80-32e2-4b62-8235-70970166c801"}, "location": "min", "bounds": "auto", "doc": null, "id": "f6f3bb30-1d53-428a-b8df-a097b1aa8dc4", "dimension": 0}, "type": "LinearAxis", "id": "f6f3bb30-1d53-428a-b8df-a097b1aa8dc4"}, {"attributes": {"plot": {"type": "Plot", "id": "rect_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "0a4e4e06-5722-420c-a22a-6220bf68d0aa", "dimension": 1}, "type": "LinearAxis", "id": "0a4e4e06-5722-420c-a22a-6220bf68d0aa"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "18d7501e-7ff6-4482-99dc-3d06f018c8db"}, "doc": null, "id": "8a79ae00-f4d2-492b-b09f-87448168a353", "xdata_range": {"type": "DataRange1d", "id": "ed7a8d84-e8d0-47ef-beb9-b52fdb60e8ed"}, "ydata_range": {"type": "DataRange1d", "id": "2db628f7-b6b1-45dc-bc72-fc7783eb6d4e"}, "glyphspec": {"line_color": {"value": null}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "green"}, "type": "rect", "fill_alpha": 0.6, "height": {"units": "data", "field": "height"}, "width": {"units": "data", "field": "width"}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize"}, "nonselection_glyphspec": {"line_color": {"value": null}, "angle_units": "deg", "fill_color": {"value": "green"}, "height": {"units": "data", "field": "height"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "width": {"units": "data", "field": "width"}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "rect", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "8a79ae00-f4d2-492b-b09f-87448168a353"}, {"attributes": {"plot": {"type": "Plot", "id": "rect_example"}, "dataranges": [], "id": "d8c1dc5c-b9c1-43f7-8c17-3493a3606f52", "doc": null}, "type": "PreviewSaveTool", "id": "d8c1dc5c-b9c1-43f7-8c17-3493a3606f52"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "ed7a8d84-e8d0-47ef-beb9-b52fdb60e8ed"}, {"type": "DataRange1d", "id": "2db628f7-b6b1-45dc-bc72-fc7783eb6d4e"}], "dimensions": ["width", "height"], "doc": null, "id": "80ffe6da-e267-4f7b-9d3d-b8ce5fa8bab3"}, "type": "PanTool", "id": "80ffe6da-e267-4f7b-9d3d-b8ce5fa8bab3"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "ed7a8d84-e8d0-47ef-beb9-b52fdb60e8ed"}, {"type": "DataRange1d", "id": "2db628f7-b6b1-45dc-bc72-fc7783eb6d4e"}], "dimensions": ["width", "height"], "id": "cc9b5208-efc3-45a0-8eec-74615ec5c9bd"}, "type": "ZoomTool", "id": "cc9b5208-efc3-45a0-8eec-74615ec5c9bd"}, {"attributes": {"plot": {"type": "Plot", "id": "rect_example"}, "id": "773c3f35-cbea-49dc-b874-21cfbc824dbe", "doc": null}, "type": "ResizeTool", "id": "773c3f35-cbea-49dc-b874-21cfbc824dbe"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "8fa794c8-5a9b-4812-a469-699279b68c0f"}, "doc": null, "id": "1ab68476-9670-4691-8c69-cac534157da9", "xdata_range": {"type": "DataRange1d", "id": "b4185475-5a6b-4d1d-8f04-91f4e9d79453"}, "ydata_range": {"type": "DataRange1d", "id": "5713a3b1-96f5-4f38-b0b0-5121755eb326"}, "glyphspec": {"line_color": {"value": "#ff0000"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "#ff0000"}, "type": "rect", "height_units": "screen", "height": {"units": "screen", "value": 2}, "width": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "width_units": "screen", "tools": "pan,zoom,save,resize", "name": "rect_example"}, "nonselection_glyphspec": {"line_color": {"value": "#ff0000"}, "angle_units": "deg", "fill_color": {"value": "#ff0000"}, "height": {"units": "screen", "value": 2}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "width": {"units": "screen", "value": 4}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "rect", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "1ab68476-9670-4691-8c69-cac534157da9"}, {"attributes": {"plot": {"type": "Plot", "id": "rect_example"}, "doc": null, "dimension": 1, "id": "51cd13d5-14ed-4f84-862a-b1f5a05aa1fd"}, "type": "Grid", "id": "51cd13d5-14ed-4f84-862a-b1f5a05aa1fd"}, {"attributes": {"plot": {"type": "Plot", "id": "a152ee80-32e2-4b62-8235-70970166c801"}, "location": "min", "bounds": "auto", "doc": null, "id": "d6f308a5-19d7-456a-b8af-e269158ca89a", "dimension": 1}, "type": "LinearAxis", "id": "d6f308a5-19d7-456a-b8af-e269158ca89a"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "b4185475-5a6b-4d1d-8f04-91f4e9d79453"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "5713a3b1-96f5-4f38-b0b0-5121755eb326"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "0873a5ba-e97b-4c48-9c28-3755378bfc5b"}, {"type": "LinearAxis", "id": "0a4e4e06-5722-420c-a22a-6220bf68d0aa"}, {"type": "Grid", "id": "d38c5cde-c557-4531-b41d-d00db872f281"}, {"type": "Grid", "id": "51cd13d5-14ed-4f84-862a-b1f5a05aa1fd"}, {"type": "GlyphRenderer", "id": "1ab68476-9670-4691-8c69-cac534157da9"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "rect_example", "tools": [{"type": "PanTool", "id": "6650028c-906b-4530-92d5-013ee8933612"}, {"type": "ZoomTool", "id": "a54c4c83-6a34-4992-ab2c-cf7f528c57b2"}, {"type": "PreviewSaveTool", "id": "d8c1dc5c-b9c1-43f7-8c17-3493a3606f52"}, {"type": "ResizeTool", "id": "773c3f35-cbea-49dc-b874-21cfbc824dbe"}], "canvas_width": 600}, "type": "Plot", "id": "rect_example"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.15839802440721498, 0.31279660702222717, 0.45929728922297797, 0.5942010289717106, 0.7141015990967496, 0.815971592199161, 0.8972388606192122, 0.9558514614057608, 0.9903294664725019, 0.9998023297700656, 0.9840308679784207, 0.9434132997221345, 0.8789751908224336, 0.7923435594615744, 0.6857057950864132, 0.5617544283207707, 0.4236191464085279, 0.27478777075102506, 0.11901819180190486, -0.03975651509692564, -0.19752739717795278, -0.35031084756382447, -0.4942491886167231, -0.6257080756605602, -0.7413682616986181, -0.8383094061302768, -0.9140838113540347, -0.966778225458037, -0.9950621505224275, -0.998221436781933, -0.9761763144190507, -0.929483407697387, -0.8593216805796612, -0.7674626686939078, -0.6562257492703756, -0.528419578452619, -0.3872711746506408, -0.23634443853290504, -0.079450166971714, 0.07945016697171439, 0.23634443853290543, 0.38727117465064126, 0.5284195784526193, 0.6562257492703759, 0.7674626686939079, 0.8593216805796613, 0.9294834076973871, 0.976176314419051, 0.9982214367819331, 0.9950621505224274, 0.966778225458037, 0.9140838113540342, 0.8383094061302766, 0.7413682616986179, 0.6257080756605592, 0.4942491886167231, 0.35031084756382413, 0.19752739717795192, 0.03975651509692613, -0.11901819180190482, -0.27478777075102584, -0.42361914640852905, -0.5617544283207707, -0.6857057950864135, -0.7923435594615749, -0.8789751908224336, -0.9434132997221346, -0.9840308679784208, -0.9998023297700656, -0.9903294664725019, -0.9558514614057606, -0.8972388606192118, -0.815971592199161, -0.7141015990967494, -0.5942010289717097, -0.4592972892229782, -0.31279660702222695, -0.15839802440721423, -4.898587196589413e-16], "x": [0.0, 0.1590679824602427, 0.3181359649204854, 0.47720394738072813, 0.6362719298409708, 0.7953399123012135, 0.9544078947614563, 1.1134758772216988, 1.2725438596819416, 1.4316118421421844, 1.590679824602427, 1.7497478070626697, 1.9088157895229125, 2.0678837719831553, 2.2269517544433977, 2.3860197369036404, 2.5450877193638832, 2.704155701824126, 2.863223684284369, 3.022291666744611, 3.181359649204854, 3.3404276316650967, 3.4994956141253395, 3.6585635965855823, 3.817631579045825, 3.9766995615060674, 4.135767543966311, 4.294835526426553, 4.453903508886795, 4.6129714913470385, 4.772039473807281, 4.931107456267524, 5.0901754387277665, 5.249243421188009, 5.408311403648252, 5.567379386108494, 5.726447368568738, 5.88551535102898, 6.044583333489222, 6.2036513159494655, 6.362719298409708, 6.521787280869951, 6.680855263330193, 6.839923245790436, 6.998991228250679, 7.158059210710921, 7.317127193171165, 7.476195175631407, 7.63526315809165, 7.7943311405518925, 7.953399123012135, 8.112467105472378, 8.271535087932621, 8.430603070392863, 8.589671052853106, 8.74873903531335, 8.90780701777359, 9.066875000233834, 9.225942982694077, 9.385010965154319, 9.544078947614562, 9.703146930074805, 9.862214912535048, 10.02128289499529, 10.180350877455533, 10.339418859915776, 10.498486842376018, 10.65755482483626, 10.816622807296504, 10.975690789756747, 11.134758772216989, 11.293826754677232, 11.452894737137475, 11.611962719597717, 11.77103070205796, 11.930098684518203, 12.089166666978445, 12.248234649438688, 12.407302631898931, 12.566370614359172]}, "id": "8fa794c8-5a9b-4812-a469-699279b68c0f"}, "type": "ColumnDataSource", "id": "8fa794c8-5a9b-4812-a469-699279b68c0f"}, {"attributes": {"column_names": ["height", "width", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.15839802440721498, 0.31279660702222717, 0.45929728922297797, 0.5942010289717106, 0.7141015990967496, 0.815971592199161, 0.8972388606192122, 0.9558514614057608, 0.9903294664725019, 0.9998023297700656, 0.9840308679784207, 0.9434132997221345, 0.8789751908224336, 0.7923435594615744, 0.6857057950864132, 0.5617544283207707, 0.4236191464085279, 0.27478777075102506, 0.11901819180190486, -0.03975651509692564, -0.19752739717795278, -0.35031084756382447, -0.4942491886167231, -0.6257080756605602, -0.7413682616986181, -0.8383094061302768, -0.9140838113540347, -0.966778225458037, -0.9950621505224275, -0.998221436781933, -0.9761763144190507, -0.929483407697387, -0.8593216805796612, -0.7674626686939078, -0.6562257492703756, -0.528419578452619, -0.3872711746506408, -0.23634443853290504, -0.079450166971714, 0.07945016697171439, 0.23634443853290543, 0.38727117465064126, 0.5284195784526193, 0.6562257492703759, 0.7674626686939079, 0.8593216805796613, 0.9294834076973871, 0.976176314419051, 0.9982214367819331, 0.9950621505224274, 0.966778225458037, 0.9140838113540342, 0.8383094061302766, 0.7413682616986179, 0.6257080756605592, 0.4942491886167231, 0.35031084756382413, 0.19752739717795192, 0.03975651509692613, -0.11901819180190482, -0.27478777075102584, -0.42361914640852905, -0.5617544283207707, -0.6857057950864135, -0.7923435594615749, -0.8789751908224336, -0.9434132997221346, -0.9840308679784208, -0.9998023297700656, -0.9903294664725019, -0.9558514614057606, -0.8972388606192118, -0.815971592199161, -0.7141015990967494, -0.5942010289717097, -0.4592972892229782, -0.31279660702222695, -0.15839802440721423, -4.898587196589413e-16], "width": [0.027182818284590453, 0.027618667180970488, 0.02806150447194916, 0.02851144220933954, 0.02896859424159177, 0.02943307624260034, 0.02990500574097318, 0.030384502149770155, 0.03087168679671831, 0.03136668295491165, 0.03186961587400307, 0.03238061281189652, 0.03289980306694726, 0.0334273180106784, 0.03396329112102207, 0.034507858016093525, 0.03506115648850687, 0.03562332654024085, 0.03619451041806382, 0.036774852649526686, 0.037364500079532896, 0.03796360190749487, 0.038572309725086115, 0.03919077755459878, 0.03981916188791607, 0.04045762172610969, 0.04110631861967212, 0.04176541670939399, 0.04243508276789686, 0.043115486241832014, 0.04380679929475575, 0.0445091968506922, 0.04522285663839467, 0.04594795923631662, 0.04668468811830368, 0.04743322970001831, 0.04819377338610892, 0.048966511618135165, 0.04975163992326175, 0.05054935696373297, 0.05135986458714054, 0.05218336787749744, 0.0530200752071305, 0.05387019828940539, 0.054733952232296636, 0.05561155559281675, 0.05650323043231808, 0.057409202372681344, 0.05832970065340509, 0.059264958189610466, 0.060215211630976165, 0.06118070142161826, 0.06216167186093011, 0.06315837116539784, 0.06417105153140698, 0.06519996919905612, 0.06624538451699355, 0.067307562008294, 0.06838677043739115, 0.06948328287808345, 0.07059737678263059, 0.0717293340519575, 0.07287944110698438, 0.07404798896109999, 0.07523527329379745, 0.07644159452549036, 0.07766725789352869, 0.07891257352943347, 0.08017785653736978, 0.08146342707387809, 0.08276961042888409, 0.08409673710800718, 0.08544514291618877, 0.0868151690426617, 0.08820716214728179, 0.0896214744482437, 0.09105846381120322, 0.0925184938398288, 0.09400193396780444, 0.0955091595523084], "x": [0.0, 0.1590679824602427, 0.3181359649204854, 0.47720394738072813, 0.6362719298409708, 0.7953399123012135, 0.9544078947614563, 1.1134758772216988, 1.2725438596819416, 1.4316118421421844, 1.590679824602427, 1.7497478070626697, 1.9088157895229125, 2.0678837719831553, 2.2269517544433977, 2.3860197369036404, 2.5450877193638832, 2.704155701824126, 2.863223684284369, 3.022291666744611, 3.181359649204854, 3.3404276316650967, 3.4994956141253395, 3.6585635965855823, 3.817631579045825, 3.9766995615060674, 4.135767543966311, 4.294835526426553, 4.453903508886795, 4.6129714913470385, 4.772039473807281, 4.931107456267524, 5.0901754387277665, 5.249243421188009, 5.408311403648252, 5.567379386108494, 5.726447368568738, 5.88551535102898, 6.044583333489222, 6.2036513159494655, 6.362719298409708, 6.521787280869951, 6.680855263330193, 6.839923245790436, 6.998991228250679, 7.158059210710921, 7.317127193171165, 7.476195175631407, 7.63526315809165, 7.7943311405518925, 7.953399123012135, 8.112467105472378, 8.271535087932621, 8.430603070392863, 8.589671052853106, 8.74873903531335, 8.90780701777359, 9.066875000233834, 9.225942982694077, 9.385010965154319, 9.544078947614562, 9.703146930074805, 9.862214912535048, 10.02128289499529, 10.180350877455533, 10.339418859915776, 10.498486842376018, 10.65755482483626, 10.816622807296504, 10.975690789756747, 11.134758772216989, 11.293826754677232, 11.452894737137475, 11.611962719597717, 11.77103070205796, 11.930098684518203, 12.089166666978445, 12.248234649438688, 12.407302631898931, 12.566370614359172], "height": [0.2, 0.1974750683872667, 0.18996402634555654, 0.1776565225498264, 0.16086331305415297, 0.14000841491388508, 0.11561840004496966, 0.08830909964318238, 0.05877005486758418, 0.027747106397813623, 0.003976437533014035, 0.03559957913551007, 0.06632385571041359, 0.09537350028570125, 0.12201502920210486, 0.14557576207389883, 0.16546080650861147, 0.18116807873310467, 0.1923009808654841, 0.1985784147403947, 0.1998418794454604, 0.19605947336092722, 0.18732669965374557, 0.17386405488791648, 0.15601146163704238, 0.13421968567180736, 0.10903895443253345, 0.08110506416259874, 0.05112332648809497, 0.019850759781612246, 0.011923025033963981, 0.04339576162126372, 0.0737727849048016, 0.1022870958206844, 0.12821872751844407, 0.15091292403164602, 0.16979667241827287, 0.18439317094564137, 0.194333868008082, 0.1993677678029392, 0.1993677678029392, 0.19433386800808197, 0.18439317094564134, 0.16979667241827281, 0.150912924031646, 0.12821872751844404, 0.10228709582068435, 0.07377278490480153, 0.04339576162126347, 0.011923025033963903, 0.019850759781612326, 0.05112332648809505, 0.08110506416259898, 0.10903895443253349, 0.1342196856718074, 0.15601146163704255, 0.17386405488791648, 0.1873266996537456, 0.19605947336092727, 0.1998418794454604, 0.1985784147403947, 0.19230098086548408, 0.18116807873310456, 0.16546080650861147, 0.14557576207389875, 0.12201502920210475, 0.09537350028570127, 0.06632385571041353, 0.0355995791355099, 0.003976437533013778, 0.02774710639781366, 0.05877005486758429, 0.08830909964318256, 0.11561840004496966, 0.14000841491388513, 0.16086331305415308, 0.17765652254982633, 0.18996402634555654, 0.19747506838726672, 0.2]}, "id": "18d7501e-7ff6-4482-99dc-3d06f018c8db"}, "type": "ColumnDataSource", "id": "18d7501e-7ff6-4482-99dc-3d06f018c8db"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "2f441c8b-8ed7-4067-bd87-4e6de86fb2b1"}, "doc": null, "id": "c825723f-2f0b-49bc-98be-947fe0eee9be", "xdata_range": {"type": "DataRange1d", "id": "32625f68-eb1b-4e45-b17e-5136a22b371e"}, "ydata_range": {"type": "DataRange1d", "id": "572d3368-ef3d-43cc-a5e5-d962740fec4d"}, "glyphspec": {"line_color": {"value": "#4444aa"}, "angle": {"units": "data", "value": -0.5235987755982988}, "fill_color": {"value": "#4444aa"}, "type": "rect", "height": {"units": "data", "value": 0.1}, "width": {"units": "data", "value": 0.05}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "name": "rect_example4"}, "nonselection_glyphspec": {"line_color": {"value": "#4444aa"}, "angle_units": "deg", "fill_color": {"value": "#4444aa"}, "height": {"units": "data", "value": 0.1}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "line_alpha": 0.1, "angle": {"units": "data", "value": -0.5235987755982988}, "radius_units": "screen", "width": {"units": "data", "value": 0.05}, "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "rect", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "c825723f-2f0b-49bc-98be-947fe0eee9be"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "32625f68-eb1b-4e45-b17e-5136a22b371e"}, {"type": "DataRange1d", "id": "572d3368-ef3d-43cc-a5e5-d962740fec4d"}], "dimensions": ["width", "height"], "id": "e6f85769-2c6e-43cb-8012-1f744e47a8c8"}, "type": "ZoomTool", "id": "e6f85769-2c6e-43cb-8012-1f744e47a8c8"}, {"attributes": {"plot": {"type": "Plot", "id": "rect_example4"}, "doc": null, "dimension": 0, "id": "137499fa-15e4-4ed0-8422-a88668d6e2fe"}, "type": "Grid", "id": "137499fa-15e4-4ed0-8422-a88668d6e2fe"}, {"attributes": {"plot": {"type": "Plot", "id": "rect_example4"}, "doc": null, "dimension": 1, "id": "c8dd549f-86c7-488b-a853-9797e3f4d091"}, "type": "Grid", "id": "c8dd549f-86c7-488b-a853-9797e3f4d091"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "b4185475-5a6b-4d1d-8f04-91f4e9d79453"}, {"type": "DataRange1d", "id": "5713a3b1-96f5-4f38-b0b0-5121755eb326"}], "dimensions": ["width", "height"], "doc": null, "id": "6650028c-906b-4530-92d5-013ee8933612"}, "type": "PanTool", "id": "6650028c-906b-4530-92d5-013ee8933612"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "2f441c8b-8ed7-4067-bd87-4e6de86fb2b1"}, "columns": ["y"]}], "id": "572d3368-ef3d-43cc-a5e5-d962740fec4d", "doc": null}, "type": "DataRange1d", "id": "572d3368-ef3d-43cc-a5e5-d962740fec4d"}];
    var modeltype = "PlotContext";
    var elementid = "1149f6f8-2378-4610-9ef4-44fbbf13c13a";
    var plotID = "rect_example4";
    var dd = {};
    dd[plotID] = all_models;


    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    
    var bokeh_defined = !(typeof(_embed_bokeh_inject_application) == "undefined");
    
    var script_injected = bokeh_defined && _embed_bokeh_inject_application;
    /*
    console.log(
        "plotID", plotID,
        "bokeh_defined", bokeh_defined, 
        "script_injected", script_injected,
        "typeof rrequire", typeof rrequire);
    */
    if(typeof rrequire == "function"){
        // application.js is already loaded
        console.log("application.js is already loaded, going straight to plotting");
        embed_core = rrequire("./embed_core");
        embed_core.search_and_plot(dd);
    }
    else {
        // application.js isn't loaded and it hasn't been scheduled to be injected
        if(!script_injected){ 
            var s = document.createElement('script');
            s.async = true; s.src = bokehUrl; s.id="embed.js"}
        else {
            // in this case, the script block for application.js has been
            // injected, but it hasn't yet loaded.
            var s = document.getElementById('embed.js');
        }

        _embed_bokeh_inject_application = true;
        addEvent(
            s,'load', 
            function() {
                console.log("application.js loaded callback");
                embed_core = rrequire("./embed_core");
                console.log("embed_core loaded")
                embed_core.search_and_plot(dd);
                embed_core.injectCss(host);
                console.log("search_and_plot called");
            });
        document.body.appendChild(s);        
    }

    window._embed_bokeh = true;
}(this));
