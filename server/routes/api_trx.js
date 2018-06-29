var branch = require('../models/trx/branch');
var emp = require('../models/trx/employee');
var prj = require('../models/trx/project');
var prj_br = require('../models/trx/projectbranch');
var prj_em = require('../models/trx/projectemployee');
var prj_rl = require('../models/trx/projectroleplay');
var roleplay = require('../models/trx/roleplay');
var internship = require('../models/trx/internship');

var express = require('express');
var router = express.Router();
//upload


//region branch
router.get('/branch', function (req, res, next) {
    branch.getAllBranch(function (err, rows) {
        if (err) { res.json(err); }
        else {
            res.json(rows);
        }
    });
});

router.post('/branch/cr/', function (req, res, next) {
    if (req.body) {
        branch.getAllBranchByCriteria(req.body, function (err, rows) {
            if (err) { res.json(err); }
            else { res.json(rows); }
        });
    }
});

router.post('/branch/', function (req, res, next) {
    branch.insertBranch(req.body, function (err, document_no) {
        if (err) { res.json(err); }
        else { res.json(document_no); }
    });
});

router.put('/branch/:key', function (req, res, next) {
    branch.updateBranch(req.params.key, req.body, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

router.delete('/branch/:key', function (req, res, next) {
    branch.deleteBranch(req.params.key, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

//employee
router.get('/employee', function (req, res, next) {
    emp.getAllEmployee(function (err, rows) {
        if (err) { res.json(err); }
        else {
            res.json(rows);
        }
    });
});

router.post('/employee/cr/', function (req, res, next) {
    if (req.body) {
        emp.getAllEmployeeByCriteria(req.body, function (err, rows) {
            if (err) { res.json(err); }
            else { res.json(rows); }
        });
    }
});

router.post('/employee/', function (req, res, next) {
    emp.insertEmployee(req.body, function (err, document_no) {
        if (err) { res.json(err); }
        else { res.json(document_no); }
    });
});

router.put('/employee/:key', function (req, res, next) {
    emp.updateEmployee(req.params.key, req.body, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

router.delete('/employee/:key', function (req, res, next) {
    emp.deleteEmployee(req.params.key, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

//project
router.get('/project', function (req, res, next) {
    prj.getAllProject(function (err, rows) {
        if (err) { res.json(err); }
        else {
            res.json(rows);
        }
    });
});

router.get('/project_active', function (req, res, next) {
    if (req.query.emp) {
        prj_em.getActiveProjectEmployee(req.query.emp, function (err, rows) {
            if (err) { res.json(err); }
            else {
                res.json(rows);
            }
        });
    } else {
        return res.status(404).send({ auth: false, message: 'No Found.' });
    }
});

router.get('/project_roleplay_active', function (req, res, next) {
    if (req.query.prj) {
        prj_rl.getActiveProjectRolePlay(req.query.prj, function (err, rows) {
            if (err) { res.json(err); }
            else {
                res.json(rows);
            }
        });
    } else {
        return res.status(404).send({ auth: false, message: 'No Found.' });
    }
});

router.post('/project/cr/', function (req, res, next) {
    if (req.body) {
        prj.getAllProjectByCriteria(req.body, function (err, rows) {
            if (err) { res.json(err); }
            else { res.json(rows); }
        });
    }
});

router.post('/project/', function (req, res, next) {
    prj.insertProject(req.body, function (err, document_no) {
        if (err) { res.json(err); }
        else { res.json(document_no); }
    });
});

router.put('/project/:key', function (req, res, next) {
    prj.updateProject(req.params.key, req.body, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

router.delete('/project/:key', function (req, res, next) {
    prj.deleteProject(req.params.key, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

//project_branch
router.get('/project_branch', function (req, res, next) {
    prj_br.getAllProjectBranch(function (err, rows) {
        if (err) { res.json(err); }
        else {
            res.json(rows);
        }
    });
});

router.post('/project_branch/cr/', function (req, res, next) {
    if (req.body) {
        prj_br.getAllProjectBranchByCriteria(req.body, function (err, rows) {
            if (err) { res.json(err); }
            else { res.json(rows); }
        });
    }
});

router.post('/project_branch/', function (req, res, next) {
    prj_br.insertProjectBranch(req.body, function (err, document_no) {
        if (err) { res.json(err); }
        else { res.json(document_no); }
    });
});

router.put('/project_branch/:key', function (req, res, next) {
    prj_br.updateProjectBranch(req.params.key, req.body, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

router.delete('/project_branch/:key', function (req, res, next) {
    prj_br.deleteProjectBranch(req.params.key, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

//project_employee
router.get('/project_employee', function (req, res, next) {
    prj_em.getAllProjectEmployee(function (err, rows) {
        if (err) { res.json(err); }
        else {
            res.json(rows);
        }
    });
});

router.post('/project_employee/cr/', function (req, res, next) {
    if (req.body) {
        prj_em.getAllProjectEmployeeByCriteria(req.body, function (err, rows) {
            if (err) { res.json(err); }
            else { res.json(rows); }
        });
    }
});

router.post('/project_employee/', function (req, res, next) {
    prj_em.insertProjectEmployee(req.body, function (err, document_no) {
        if (err) { res.json(err); }
        else { res.json(document_no); }
    });
});

router.put('/project_employee/:key', function (req, res, next) {
    prj_em.updateProjectEmployee(req.params.key, req.body, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

router.delete('/project_employee/:key', function (req, res, next) {
    prj_em.deleteProjectEmployee(req.params.key, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

//project_roleplay
router.get('/project_roleplay', function (req, res, next) {
    prj_rl.getAllProjectRolePlay(function (err, rows) {
        if (err) { res.json(err); }
        else {
            res.json(rows);
        }
    });
});

router.post('/project_roleplay/cr/', function (req, res, next) {
    if (req.body) {
        prj_rl.getAllProjectRolePlayByCriteria(req.body, function (err, rows) {
            if (err) { res.json(err); }
            else { res.json(rows); }
        });
    }
});

router.post('/project_roleplay/', function (req, res, next) {
    prj_rl.insertProjectRolePlay(req.body, function (err, document_no) {
        if (err) { res.json(err); }
        else { res.json(document_no); }
    });
});

router.put('/project_roleplay/:key', function (req, res, next) {
    prj_rl.updateProjectRolePlay(req.params.key, req.body, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

router.delete('/project_roleplay/:key', function (req, res, next) {
    prj_rl.deleteProjectRolePlay(req.params.key, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

//roleplay
router.get('/roleplay', function (req, res, next) {
    roleplay.getAllRolePlay(function (err, rows) {
        if (err) { res.json(err); }
        else {
            res.json(rows);
        }
    });
});

router.post('/roleplay/cr/', function (req, res, next) {
    if (req.body) {
        roleplay.getAllRolePlayByCriteria(req.body, function (err, rows) {
            if (err) { res.json(err); }
            else { res.json(rows); }
        });
    }
});

router.post('/roleplay/', function (req, res, next) {
    roleplay.insertRolePlay(req.body, function (err, document_no) {
        if (err) { res.json(err); }
        else { res.json(document_no); }
    });
});

router.put('/roleplay/:key', function (req, res, next) {
    roleplay.updateRolePlay(req.params.key, req.body, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

router.delete('/roleplay/:key', function (req, res, next) {
    roleplay.deleteRolePlay(req.params.key, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});


//internship
router.get('/internship', function (req, res, next) {
    internship.getAllInternship(function (err, rows) {
        if (err) { res.json(err); }
        else {
            res.json(rows);
        }
    });
});

router.get('/internship/last', function (req, res, next) {
    if (req.query.br && req.query.prj) {
        internship.getLastInternship(req.query.br, req.query.prj, function (err, rows) {
            if (err) { res.json(err); }
            else { res.json(rows); }
        });
    }
});

router.post('/internship/cr/', function (req, res, next) {
    if (req.body) {
        internship.getAllInternshipByCriteria(req.body, function (err, rows) {
            if (err) { res.json(err); }
            else { res.json(rows); }
        });
    }
});

router.post('/internship/', function (req, res, next) {
    internship.insertInternship(req.body, function (err, document_no) {
        if (err) { res.json(err); }
        else { res.json(document_no); }
    });
});

router.put('/internship/:key', function (req, res, next) {
    internship.updateInternship(req.params.key, req.body, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

router.delete('/internship/:key', function (req, res, next) {
    internship.deleteInternship(req.params.key, function (err, rows) {
        if (err) { res.json(err); }
        else { res.json(rows); }
    });
});

router.post('/internship/upload', function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    let internshipFile = req.files.internshipFile;
    const uuidv1 = require('uuid/v1');
    let ftype = internshipFile.mimetype.split('/')[1];
    internshipFile.name = uuidv1()+"."+ftype;
    
    //let storage = './src/assets/vid/';
    let storage = './dist/rd-experdmantap/assets/vid/';

    internshipFile.mv(storage + internshipFile.name, function (err) {
        if (err)
            return res.status(500).send(err);
        res.status(200).send({"filename":internshipFile.name});
    });
});
module.exports = router;