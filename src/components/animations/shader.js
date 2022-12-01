export const vertexShader = `
varying vec3 v_pos;
varying vec3 v_normal;

void main() {
	v_pos = normalize(position);
	v_normal = normalize(normal);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const chaos31 = `
float chaos31(vec3 v, float scale, float time) {
	vec3 vv = v;
	vv += 0.1 * cos(scale * 3.7 * vv.yzx + 1.4 * time + vec3(2.2, 3.4, 0.5));
	vv += 0.1 * cos(scale * 3.0 * vv.zxy + 1.0 * time + vec3(1.2, 3.4, 2.5));
	vv += 0.3 * cos(scale * 5.0 * vv.yzx + 2.6 * time + vec3(4.2, 1.4, 1.0));
	vv += 0.3 * cos(scale * 7.5 * vv.zxy + 3.6 * time + vec3(12.2, 3.4, 3.2));
	return length(vv);
}
`

export const fragmentShader = `
uniform float u_time;
uniform float u_scale;
varying vec3 v_pos;
varying vec3 v_normal;

void layer(inout float alpha, float distortion, float radius, float space) {
	float inRadius = 1.0 - radius + space;
	alpha *= smoothstep(radius, radius + 0.002, distortion);
	alpha += smoothstep(inRadius, inRadius + 0.002, 1.0 - distortion);
}

${chaos31}

void main() {
	float distortion = chaos31(v_pos, u_scale, u_time);

	float alpha = smoothstep(0.01, 0.01 + 0.002, 1.0 - distortion);
	layer(alpha, distortion, 0.9, 0.03);
	layer(alpha, distortion, 0.7, 0.03);
	layer(alpha, distortion, 0.5, 0.03);
	layer(alpha, distortion, 0.3, 0.03);

	// 法線ベクトルは、基準化されていて長さが「-1 ~ 1」で成分はこの範囲に小さめに収まる。
	// 「0 ~ 1」に収まるようにする。
	vec3 color = vec3((v_normal + 1.0) * 0.5);

  gl_FragColor = vec4(color, alpha);
}
`

export const shadowFragmentShader = `
uniform float u_time;
uniform float u_scale;
varying vec3 v_pos;
varying vec3 v_normal;

${chaos31}

void main() {
	float distortion = chaos31(v_pos, u_scale, u_time);
	distortion *= 0.96; // 影を少し拡大する

	float darkness = smoothstep(0.0, 0.1, 1.0 - distortion);

	vec3 color = vec3((v_normal + 1.0) * 0.5);
	color *= min((1.0 - darkness + 0.4), 1.0); // 影を入れる。影は少し淡くする
	color *= 0.7; // 全体的に少し暗くする

  gl_FragColor = vec4(color, 1.0);
}
`
