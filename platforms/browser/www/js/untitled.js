/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

    // Application Constructor
    function initialize() {
        bindEvents();
    }
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    function bindEvents() {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    localFileName = 'mapTiles/pokhara_nepal.mbtiles';
    remoteFile = 'http://dl.dropbox.com/u/14814828/OSMBrightSLValley.mbtiles';

    function onDeviceReady() {
        
        var fs;
        console.log('Requesting Files....Checking');
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,successfile, errorfile );
    } 
        function successfile(filesystem){
            console.log('file system retrived');
            // fs = filesystem;

            // //Checks to see file exist
            // var file = fs.root.getFile(localFileName,{create: false}, function(){
            //     console.log('File Exist');
            //     buildMap();
            // }
        }
        function errorfile() {
            // file does not exist
            console.log('does not exist');

            // msg.innerHTML = 'Downloading file (~14mbs)...';

            // console.log('downloading sqlite file...');
            // ft = new FileTransfer();
            // ft.download(remoteFile, fs.root.fullPath + '/' + localFileName, function (entry) {
            //     console.log('download complete: ' + entry.fullPath);

            //     buildMap();

            // }, function (error) {
            //     console.log('error with download', error);
            // });
    }
    // initializeMap();

    
    // Update DOM on a Received Event
    // function initializeMap() {
    //     var map = new L.Map('map');

    //     var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    //     var osmAttrib = 'Map data © OpenStreetMap contributors';
    //     var osm = new L.TileLayer(osmUrl, { attribution: osmAttrib });

    //     map.setView(new L.LatLng(28.3949, 84.1240), 8);
    //     map.addLayer(osm);
    // }

    // function buildMap(){
    //     var db  = new SQLitePligin(localFileName);

    //     var map = new L.Map('map', {
    //         center: new L.LatLng(28.3949, 84.1240),
    //         zoom: 11
    //     });
    //     var mbLayer = new L.TileLayer.MBTiles('', {maxZoom: 18, scheme:'tms'}, db);
    //     map.addLayer(mbLayer);
    // }
    

