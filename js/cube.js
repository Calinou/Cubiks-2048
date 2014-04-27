function create_inner_cube(cube_dim) {
    var offset = 10;

    cube_dim -= offset;
    cube_geo = new THREE.CubeGeometry(cube_dim, cube_dim, cube_dim);

    var texture = null;

    if (Math.random() < 0.9)
        texture = textures[2];
    else
        texture = textures[4];

    cube_mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.8 });
    return new THREE.Mesh(cube_geo, cube_mat);
};

function create_frame(frame_dim) {
    var frame = new THREE.BoxHelper();
    frame.material.color.setRGB(0, 0, 0);
    frame.scale.set(frame_dim, frame_dim, frame_dim);
    return frame;
};

function bind_keyboard_keys() {

    KeyboardJS.on('down', function () { // Rotate about x clockwise.

        if (!rotation_animation.is_animating()) {
            CUBE2048.add_random_cube();
            rotation_animation.animation_residue = rotation_animation.animation_duration;
            rotation_animation.rotation_direction = +1;
            rotation_animation.rotate_x = true;
        }
    });

    KeyboardJS.on('up', function () { // Rotate about x anti-clockwise


        if (!rotation_animation.is_animating()) {
            CUBE2048.add_random_cube();
            rotation_animation.animation_residue = rotation_animation.animation_duration;
            rotation_animation.rotation_direction = -1;
            rotation_animation.rotate_x = true;
        }
    });

    KeyboardJS.on('left', function () { // Rotate about z anticlockwise


        if (!rotation_animation.is_animating()) {
            CUBE2048.add_random_cube();
            rotation_animation.animation_residue = rotation_animation.animation_duration;
            rotation_animation.rotation_direction = +1
            rotation_animation.rotate_z = true;
        }
    });

    KeyboardJS.on('right', function () {  // Rotate about z clockwise

        if (!rotation_animation.is_animating()) {
            CUBE2048.add_random_cube();
            rotation_animation.animation_residue = rotation_animation.animation_duration;
            rotation_animation.rotation_direction = -1;
            rotation_animation.rotate_z = true;
        }

    });
};
