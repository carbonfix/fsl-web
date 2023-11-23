//  shared  messages - used in more than 1 file
var msg_blank = "%s����Ϊ��.\n";
var msg_space = "Blanks or spaces are not allowed in %s\n";
var msg_invalid = "%s��Ч������������!\n";
var msg_check_invalid = "%s�����Ƿ��ַ�\n";
var msg_valid_range = "%s��Χ�쳣. ��Ч�ı仯��Χ�Ǵ� %s �� %s!\n";
var msg_first = "First";  // eg. First field of GW must match device IP
var msg_invalid_mac = "%s is invalid. A MAC address must be 12 Hex chars with optional delimiters (: or -)\n";
var msg_multi_mac="The MAC address can't be multicast address.\n";
var msg_invalid_ip = "IP��ַ���Ϸ�, ����������.\n";
var msg_invalid_gw =  "Invalid Gateway, please enter again.\n";
var msg_invalid_mask = "Invalid Subnet Mask, please enter again.\n";
var msg_nameNULL = "The name can not be blank.\n";
var msg_invalid_email = "%s��Ч.\n";
var msg_invalid_host = "%s������Ч.\n";
var msg_invalid_input = "%sֻ����Ϊ32���ֽ�Ӣ�ģ����ֺͺ��ֵĻ��(����Ϊ˫�ֽ�)!\n";
var msg_invalid_num = "%sֻ����Ϊ������16���ַ�Ӣ�ģ����ֵĻ��!\n";
var msg_invalid_oid = "%s��ʽ���Ϸ����߰����Ƿ��ַ�.\n";

//reboot
var msg_no_ip = "�豸20�����޷����IP��ַ�������������Ƿ����DHCP������!";

//config
var msg_reboot = "���е��������Ӽ������ж�.\n\n�Ƿ����?";
var msg_nofile = "û��ѡ���ļ�. ��ѡ����ȷ���ļ�.\n";
var msg_errfiletype = "�ļ����Ͳ���ȷ. ��ѡ����ȷ���ļ�.\n";
//var msg_null_filename = "�ļ�������Ϊ��.\n";
var msg_confirmCfile = "����!\n�ϴ������ļ���������ǰ�����ñ�����.\n��ȷ���Ƿ���иò���?";
var msg_confirmDefault = "����!\n�ָ����������ļ���������ǰ�����ñ�����.\n���û�й�ѡ\"������ǰip����\"��������õ�Ĭ��IP��ַ��\"%s\".\n��ȷ���Ƿ���иò���?";
var msg_confirmUpgrade = "����!\n�̼����������������ж��豸��Դ�����жϺ��豸֮�����������.\n ������ɺ��豸������.\n��ȷ���Ƿ���иò���?";

//ip.html
var msg_ip = "IP��ַ";
var msg_mask = "��������";
var msg_gw = "Ĭ������";
var msg_dns = "DNS��ַ";
var msg_dns_warning = "����: DNS��ַΪ�գ�ĳЩ��Ҫ��������Ĺ��ܽ��޷�ʹ��!\n";
var msg_ip_gw_mismatch = "IP��ַ%s������%s����ͬһ����, ����������!\n";

//user
var msg_name = "�û���";
var msg_Passwd = "����";
var msg_ConfirmPasswd = "ȷ������";
var msg_nosame_Passwd = "�����ȷ�����벻ƥ�䣬��ȷ������!\n";
var msg_noadmin_Passwd = "����Ա���û��������벻��Ϊ��!\n";
var msg_user_name = "%sֻ����Ϊ16���ֽ�Ӣ�ģ����֣��»��ߺͿո�Ļ��!\n";
var msg_user_password="�û�������벻����5λ����ֻ��Ϊ���֣���ĸ�������ַ������!\n";
var msg_relogin = "ϵͳ��⵽��ǰ��¼�û����Ѹ��ģ�������ɺ������µ�¼.";
var msg_samename = "ϵͳ��⵽��ǰ��¼�û����Ѿ�ʹ�ã����������ã�\n";
var msg_nousername = "�û��������벻����Ϊ��!\n";

//system
var msg_device_name = "�豸����";
var msg_device_loc = "�豸λ��";

var msg_device_sn = "�豸���";
var msg_device_desp = "�豸����";
var msg_device_loc = "�豸λ��";
var msg_device_cont = "��ϵ��Ϣ";
var msg_invalid_cont = "%sֻ����Ϊ16���ֽ�Ӣ��,����,\'.\',\'@\'�ͺ��ֵĻ��(����Ϊ˫�ֽ�)!\n";

//igmp
var msg_igmp_interval = "IGMP ��ѯ���ʱ��";
var msg_igmp_age = "���Ա����ʱ��";

//Port Mirroring
var mirror_msg = "������ѡ��һ��������˿�!\n";
var mirror_repeat = "������˿ں;���˿ڲ�������ͬһ�˿�!\n";
var msg_mirror_port_disabled = "��ѡ��ľ���˿��Ѿ�������, ������ѡ��!\n";
var msg_capture_port_disabled = "��ѡ��ı�����˿��Ѿ�������, ������ѡ��!\n";
var msg_mirror_trunk_exclusion = "�˿ڻ�۹����ѿ���, ��رն˿ڻ�۹���!\n";
var msg_capture_port_trunk = "�˿�%s�Ѿ�����Ϊ��۶˿ڣ�\n";
var msg_capture_port_lacp = "�˿�%s�Ѿ�����ΪLACP�˿ڣ�\n";
var msg_mirror_disable_lacp = "�˿�%s�ѱ���ΪLACP�˿ڣ�\n";

//fwd
var fwd_err_mac = "MAC��ַ���Ϸ�����ȷ�Ϻ���������!\n";
var msg_forward_bpdu = "��������̫���Ź���MAC��ַ����������!\n";
var msg_forward_multi = "�����Ķಥ�����MAC��ַ����������!\n";
var msg_forward_host = "�������ͽ�������MAC��ַ����������!\n";
var msg_no_fwd_port = "�ಥ��ַ�б���ѡ������һ��ת���˿�!\n";

//access.html
var msg_access_first = "��";
var msg_access_mod = "���ַ����";
var msg_incorrect_ip = "IP��ַ��Ч!\n";
var msg_repeat_ip = "IP��ַ�ظ�!\n";
var msg_http_access = "WEB����������Ӧ����ѡ��һ�ִ���Э��!\n";
var msg_ip_input = "����������û���½����, IP��ַ����Ϊ��!\n";
var msg_deny_pc = "��ǰPC��IP���������¼�б����²��ܷ��ʸý�����, �Ƿ����?";
var msg_not_samemask = "������Ч����ǰ������ʽ�������IP��ַ�뱾��IP��ַ����ͬһ�����ڡ�";

// email.htm
var msg_mail_server = "�ʼ���������ַ";
var msg_mail_user = "�ʼ��ʺ�";
var msg_mail_passwd = "�ʼ��ʺ�����";
var msg_email_in = "�ռ��˵�ַ";
var msg_email_re = "�ʼ��ظ���ַ";

// Diagnostics.htm
var msg_ping_addr = "Ŀ�ĵ�ַ";
var msg_ping_size = "���Ĵ�С";
var msg_ping_number = "������Ŀ";
var msg_ping_interval = "���ļ��";
var msg_ping_timeout = "Ӧ��ʱ";
var msg_invalid_ipaddr = "%sIP��ַ���Ϸ�, ����������.\n";
var msg_invalid_domain = "%s�������Ϸ�, ����������.\n";

//trunk
var msg_trunking_least = "��%s��������������Ҫ1���˿�!\n";
var msg_trunking_most = "��%s�����������������%s���˿�!\n";
var msg_trunking_port_disabled = "�ڵ�%sTRUNK�˿����У���TRUNK�˿��Ѿ�������!\n";
var msg_trunking_port = "��%s������͵�%s�������ж˿��ص�!\n";
var msg_trunking_port_edit="�ڻ����\%s�У���TRUNK�˿ڵ�����δ������ȫһ�£��޷����л��!\n";
var msg_trunking_port_inconformity="�ڻ����\%s�У���TRUNK�˿ڵĶ˿�����δ������ȫһ�£��޷����л��!\n";
var msg_trunking_port_ring="�ڻ����\%s�У���TRUNK�˿��Ѿ�����Ϊ�����˿�!\n";
var msg_trunking_port_rstp="�ڻ����\%s�У���TRUNK�˿��Ѿ�����ΪRSTP�˿�!\n";
var msg_trunking_port_erps="�ڻ����\%s�У���TRUNK�˿��Ѿ�����ΪERPS�˿�!\n";
var msg_trunking_port_loopback="�ڻ����\%s�У���TRUNK�˿��Ѿ�����Ϊ���ؼ��˿�!\n";
var msg_trunk_mirror_exclusion = "�˿ھ������ѿ���, ��رն˿ھ�����!\n";
var msg_trunk_qvlan_exclusion = "802.1Q vlan�����ѿ���, ��ر�802.1Q vlan����!\n";
var msg_trunk_default_pvlan_exclusion = "�˿�vlan��Ĭ������, �����ö˿�vlanΪĬ��ֵ!\n";
var msg_trunk_vlan_mode_conflict = "�����%s�еĶ˿�VLANģʽ��ͬ�����ܼ���ͬһ�����!\n";
var msg_trunk_vlan_allow_conflict = "�����%s�ж˿�����ͨ����VLAN�б�ͬ�����ܼ���ͬһ�����!\n";
var msg_trunk_vlan_untag_conflict = "�����%s�ж˿ڳ��ڲ����ǵ�VLAN�б�ͬ�����ܼ���ͬһ�����!\n";
var msg_trunking_port_disable_lacp = "�����%s�ж˿�%s�ѱ���ΪLACP�˿�\n";
var msg_trunking_disable_lacp = "�����%s�ѱ�LACPʹ��\n!";
//protect port
var msg_protect_port = "�������Ķ˿�������Ҫ����2���˿�!\n";

//SNMP
var msg_snmpdevice_name = "SNMP�豸����";
var msg_snmp_get_comm = "SNMPֻ��ͨ���ַ���";
var msg_snmp_set_comm = "SNMP��дͨ���ַ���";
var msg_invalid_snmp_trap = "SNMP TRAP�������ز�����ЧIP��ַ!\n";
var msg_snmp_view_nme = "��ͼ��";
var msg_snmp_view_oid = "OID����";
var msg_snmp_comm_name = "��ͬ����";
var msg_snmp_user_name = "�û���";
var msg_snmp_user_authpasswd = "��֤����";
var msg_snmp_trap_ip = "trap����IP��ַ";



//rstp
var rstp_hello_time = "RSTP��ѯ���";
var rstp_forward_delay = "RSTPת���ӳ�";
var rstp_max_age = "RSTP����ϻ�ʱ��";
var rstp_delay_max_age = "RSTP��: 2 *��ת���ӳ� - 1.0) >= ����ϻ�ʱ��\n";
var rstp_max_age_hello = "RSTP��: ����ϻ�ʱ�� >= 2 *����ѯ��� + 1.0)";
var rstp_port_cost = "·������";
var rstp_port_war = "��%s�˿�";
var rstp_port_trunk = "��RSTP�У��˿� %s �Ѿ�����ΪTRUNK�˿�!\n";
var rstp_port_loopback = "�˿�%s�����˶˿ڻ��ؼ�⹦�ܣ�\n";
var rstp_port_lacp = "�˿�%s�Ѿ�����ΪLACP�˿ڣ�\n";
//VLAN
var msg_pvlan_name = "�˿�VLAN����";
var msg_qvlan_index = "802.1Q VLAN ID";
var msg_qvlan_pvid = "802.1Q �˿�VLAN ID";
var msg_qvlan_drop_port = "���Ѿ������е�ͨѶ�˿�ѡ���˶�����tag��֡,�������ܻᵼ���޷��뽻����ͨѶ.\nȷ��Ҫִ�д˲�����?";
var msg_no_member = "ת�������б���ѡ����������ת���˿�!\n";
var msg_pvlan_max_member="�˿�VLAN����������32������!\n";
var msg_qvlan_max_member="802.1Q VLAN����������64������!\n";
var msg_valn_fwd_member="�˿�%sû�б����ŵ�ĳ��ת��������!\n";
var msg_valn_warning="�˿�%s��";
var msg_vlan_port_alluse="���ж˿ڶ��Ѿ������ŵ�ת��������!";
var msg_qvlan_pvid = "802.1Q �˿�VLAN ID��������������1<=VID<=4094!\n";
var msg_vtrunk_vlan = "VLAN�б���Ϊ��!\n";
var msg_vtrunk_vid_error = "��������ȷ�� VLAN ID ��Χ!\n";
var msg_vtrunk_vlist_null = "VLAN Trunk�б�Ϊ��!\n";
var msg_vtrunk_del_dou = "VLAN �б��� ��ʼ����ĩβ�����ж���!\n";
var msg_vtrunk_port_null = "������ѡ��һ��VLAN Trunk�˿�!\n";
var msg_vtrunk_mport_null = "������ѡ��һ��VLAN ����˿�!\n";
var msg_vtrunk_port_error = "VLAN Trunk�˿������˿����ص�!\n";
var msg_vlan_choose_port = "��ѡ�񻮷�VLAN�Ķ˿ڣ�";
var msg_vtrunk_port_repeat = "��⵽Vlan trunk�б�����ķ�Χ���г�ͻ��������������밴������������!\n";
var msg_vtrunk_manager_port_disabled = "VLAN TRUNK����˿��Ѿ�������!\n";
var msg_vtrunk_port_disabled = "����ѡ���VLAN TRUNK�˿��Ѿ�������!\n";
var msg_vlan_adv_enable = "���802.1q vlan �߼������Ѿ����ã�����PVID���ܵ��±����뽻�����޷�ͨѶ��\n��ȷ��Ҫִ�д˲�����?";
var msg_vlan_mode_pvid_error = "��Accessģʽ�£��˿�\%s��PVID������󣬱��������ѻ��ֵ�VLAN��!\n";
var msg_enable_vlan_exclusion_trunk = "��۹����ѿ�������ر�!\n";
var msg_no_select_port = "�˿�δѡ��\n";

//VLAN Hybrid
var msg_vlan_access_error="�˿�%s��Access�˿ڣ�������ͨ����VLAN����ֻ��һ������ΧΪ1~4094��\n"
var msg_vlan_pvid_error="�˿�%s��PVID����PVIDȡֵ��ΧΪ1~4094����ֻ��Ϊ�˿�����ͨ����VLAN�е�һ����\n";
var msg_vlan_allow_error="�˿�%s��'����ͨ����VLAN�б�'����ֵ�����밴�ո�ʽ���������Ҳ��ܳ���%s����\n";
var msg_vlan_tag_error="�˿�%s��'���ڲ����ǵ�VLAN�б�'����ֵ�ĸ�ʽ�������������ã�\n";
var msg_vlan_tag_error_hybrid="�˿�%s��'���ڲ����ǵ�VLAN�б�'����ֵ����'����ͨ����VLAN�б�'����ֵ��Χ�ڣ����������ã�\n";
var msg_vlan_manage_vlan_range_error="����VLAN";
var msg_set_manage_vlan_error = "����Ҫ��һ���ڣ��������Vlanͨ����";
var msg_erps_enable_pvlan="ERPS�����ѿ������޷��������ڶ˿ڵ�VLAN����ȷ��!\n";
var msg_erps_protocol_vlan="VLAN \%s ����ΪERPS��Э��VLAN���޷�������\n";
var msa_qvlan_allow_trunk_conflict = "�˿�%sΪ��۶˿ڣ������޸�������ͨ����VLAN�б�!\n";
var msa_qvlan_untag_trunk_conflict = "�˿�%sΪ��۶˿ڣ������޸�����ڲ����ǵ�VLAN�б�!\n";
var msa_qvlan_mode_trunk_conflict = "�˿�%sΪ��۶˿ڣ������޸���VLAN�˿�ģʽ!\n";

//ip acl
var msg_src_port_err = "Դ�˿ںŷ�Χ����,���������룡\n";
var msg_dst_port_err = "Ŀ�Ķ˿ںŷ�Χ����,���������룡\n";
var msg_l4portrange_overlap_err = "Դ/Ŀ�Ķ˿ںŷ�Χ�����ص�,���������룡\n";
var msg_l4portrange_resource_err = "��֧��4��Դ/Ŀ�Ķ˿ںŷ�Χƥ�����\n";

//seep setting
var msg_speed_warning="������һ�����ϵĶ˿ڱ������������´��޷�ͨ��Web���ý�����!\n";

//ring
var msg_ring = "Ring";
var msg_ring_id = "���ٻ�����ʶ";
var msg_double_ring = "���ٻ�����%s��˫�ۻ�Ӧ��ʹ���ҽ�ʹ�������˿�!\n";
var msg_single_ring = "���ٻ�����%s��˫�ۻ�Ӧ��ʹ���ҽ�ʹ��һ���˿�!\n";
var msg_ring_repeat = "���ٻ�����%s��%sʹ�õĶ˿��ظ�,��ȷ��!\n";
var msg_ring_repeat_id_error = "���ٻ�����%s��%sʹ�õĶ˿��ظ�,��ʹ��%s��Ϊ�������id!\n";
var msg_ring_id_repeat = "���ٻ�����%s��%s�������ʶ�ظ�,��ȷ��!\n";
var msg_ring_id_error = "%s < ring id < %s !\n";
var msg_ring_port_disabled = "�ڵ�%s�������У��л����˿��Ѿ�������!\n";
var msg_ring_trunk_port_disabled = "�ڵ�4�������У���϶˿��Ѿ�������!\n";
var msg_ring_trunk_collision = "%s\n����ͬʱ��Ϊ�����˿ںͻ�۶˿�!\n";
var msg_ring_port_trunk = "�ڿ��ٻ�����%s�У����п��ٻ����˿ڱ���ΪTRUNK�˿�!\n";
var msg_ring_trunk_coupling = "�ڵ�4�������У���϶˿��Ѿ�����ΪTRUNK�˿�!\n"
var msg_ring_port_err = "���ٻ�����%s�Ļ��˿��ظ�����ȷ��!\n";
var msg_ring_vlan_err = "����VLAN����ֵ�����밴�ո�ʽ��������!\n";

//erps
var msg_erps_duplicate = "������%s��%sʹ�õĻ�ID�ظ�,��ȷ��!\n";
var msg_erps_id_error = "������%s��%sʹ�õ�����VLAN�ظ�,����ERPS ID��ͬ,��ȷ��!\n";
var msg_erps_vlan_duplicate = "������%s��%sʹ�õ�Э��VLAN�ظ�,��ȷ��!\n";
var msg_data_vlan_error = "����vlan�����κ�һ�������������vlan֮��";
var msg_diff_erps_port_duplicate = "������%s��%sʹ�õ�ERPS ID�Ͷ˿�һ��,��ȷ��!\n";
var msg_erps_port_duplicate = "������%s�Ļ��˿��ظ�,��ȷ��!\n";
var msg_erps_major_port = "������%s�Ļ�����Ϊ�����������Ķ����˿ھ�����Ϊnone!\n";
var msg_erps_port = "������%s�Ķ����˿ڲ��ܶ�Ϊnone!\n";
var msg_erps_vlan = "������%s��Э��vlan�ͻ�����%s����vlan�ظ�!\n";
var msg_erps_def_mac = "��ǰ�ڵ����������õĻ������Э�鱨��Ŀ��mac��ַ������ͬ!\n";
var msg_belong_major = "������%s����Ϊ�����ڵ㣬�����������ڵ�ǰ�ڵ㲻���ڣ���ȷ��!\n";
var msg_erps_port_disabled = "�ڻ�����%s�У��л����˿��Ѿ�������!\n";
var msg_erps_enable = "��ǰ���������κλ��������ã���ȷ��!\n";
var msg_sub_belong_error = "�ڻ�����%s�У��ӻ�����������Ϊ��������ȷ��!\n";
var msg_erps_port_trunk = "�ڻ�����%s�У��л����˿��Ѿ�����ΪTRUNK�˿�!\n";
var msg_vlan_type="����ERPSʱ��VLAN����������Ϊ802.1Qģʽ����ȷ�Ϻ�����!\n";
var msg_protocol_vlan= "������\%s��Э��VLAN�Ѵ�����������ѡ��δ������VLAN��ΪЭ��VLAN!\n";
var msg_erps_disable_storm = "������%s�У��л����˿��Ѿ�����Ϊ�籩���˿ڣ�\n";
var msg_erps_disable_rstp = "RSTP�����������У��޷�����ERPS��\n";
var msg_erps_disable_lacp = "������%s�У������˿�%s�Ѿ�����ΪLACP�˿ڣ�\n"

//NTP
var msg_time_server = "ʱ��ͬ����������ַ";

//AUTH
var msg_auth_name = "��֤�û���";
var msg_auth_pass = "��֤�û�����";
var msg_auth_max_member="IEEE 802.1X ��֤����������128���û�!\n";
var msg_auth_null = "��֤���ݿ��ڵ��û�����Ϊ��!\n"
var msg_reauth = "IEEE 802.1X ������֤ʱ��";
var msg_radius = "IEEE 802.1X ��֤������";
var msg_AAA = "IEEE 802.1X �Ʒѷ�����";
var msg_radius_port = "IEEE 802.1X ��֤�������˿�";
var msg_AAA_port = "IEEE 802.1X �Ʒѷ������˿�";
var msg_invalid_key = "��֤�������Ĺ�������ֻ����Ϊ������64���ֽ��Ҳ�С��6�ֽڵ�Ӣ�ģ����ֺͺ��ֵ����!\n";

//lock
var msg_max_mul = "��̬�鲥MAC��ַ�����ֻ��������512������!\n";
var msg_max_lock = "��̬���������ַ�����ֻ��������512������!\n";
var msg_mul_lock = "��̬���������ַ�����Լ���ಥ��㲥��ַ!\n";
var msg_uni_igmp = "��̬�ಥMAC��ַ�����Լ��뵥����㲥��ַ\n";
var msg_mac_ob     = "�鲥��ַ������Χ";

//storm
var msg_storm_pkts = "������ѡ��һ����������!\n";

//mac.html
var msg_oidtime_error = "MAC��ַ�ϻ�ʱ��Ӧ����������:\n%s<=�ϻ�ʱ��<=%s";
var msg_oidtime_numerror = "��������ȷ������!";

//speed
var msg_speed_disable_ring = "�������õĶ˿�Ŀǰ������Ϊ�����˿�\n";
var msg_speed_disable_vlantrunk = "�������õĶ˿�Ŀǰ������ΪVLAN TRUNK�˿�!\n";
var msg_speed_disable_vlantrunk_manager = "�������õĶ˿�Ŀǰ������ΪVLAN TRUNK���ܵĹ���˿�!\n";
var msg_speed_disable_trunk = "�������õĶ˿�Ŀǰ������ΪTRUNK�˿�!\n";
var msg_speed_disable_mirror = "�������õĶ˿�Ŀǰ������Ϊ����˿�!\n";
var msg_speed_disable_mirror_capture = "�������õĶ˿�Ŀǰ������Ϊ�ɼ��˿�!\n";
var msg_speed_disable_tail = "���ȹر���Щ�˿�����ʹ�õĹ���!\n";
var msg_speed_edit_trunk="�����޸ĵĶ˿�����Ŀǰ������ΪTRUNK�˿�!TRUNK�˿ڵ����ñ��뱣��һ��!\n";
var msg_speed_disable_lacp = "�������õĶ˿�%sĿǰ������ΪLACP�˿�\n";



var msg_upgrade_status = "ϵͳ����������������(%s/3)������ϵ���߶Խ��������κβ����������������̴�Լ��Ҫ1��2���ӡ�";
var msg_set_for_reboot = "�����ɹ�������������������...";
//copyright
var msg_copyright = "��Ȩ����&copy;��ð�ؾ�&nbsp;2012-2022&nbsp;";

//lacp
var msg_lacp_disable_trunk = "LACP������˿ڻ��ͬʱ���������ȹرն˿ڻ�۹��ܣ�\n";
var msg_lacp_disable_trunk_group = "�����%s�ѱ�ʹ��!\n";
var msg_lacp_duplicate_trunk_group = "���%s��%s�Ļ�����ظ�!\n";
var msg_lacp_disable_lacp_group = "�˿�%s�Ļ����ID%sδ����\n";
var msg_lacp_disable_speed = "�˿�%s������\n";
var msg_lacp_disable_rstp = "�˿�%s�Ѿ�����ΪRSTP�˿�\n";
var msg_lacp_disable_erps = "�˿�%s�Ѿ�����ΪERPS�˿�\n";
var msg_lacp_disable_trunk_port = "�˿�%s�Ѿ�����ΪTRUNK�˿�\n";
var msg_lacp_disable_mirror = "�˿�%s�Ѿ�����Ϊ����˿�\n";
