[0;1;32m●[0m mongod.service - MongoDB Database Server
   Loaded: loaded (/lib/systemd/system/mongod.service; disabled; vendor preset: enabled)
   Active: [0;1;32mactive (running)[0m since Fri 2024-10-18 01:26:39 WAT; 26s ago
     Docs: https://docs.mongodb.org/manual
 Main PID: 193945 (mongod)
   CGroup: /system.slice/mongod.service
           └─193945 /usr/bin/mongod --config /etc/mongod.conf

Oct 18 01:26:39 DevWezilink systemd[1]: Started MongoDB Database Server.
Oct 18 01:26:39 DevWezilink mongod[193945]: {"t":{"$date":"2024-10-18T00:26:39.363Z"},"s":"I",  "c":"CONTROL",  "id":7484500, "ctx":"main","msg":"Environment variable MONGODB_CONFIG_OVERRIDE_NOFORK == 1, overriding \"processManagement.fork\" to false"}
