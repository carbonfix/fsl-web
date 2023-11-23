//  shared  messages - used in more than 1 file
var msg_blank = "%s can't be blank.\n";//"%s����Ϊ��.\n";
var msg_space = "Blanks or spaces are not allowed in %s\n";
var msg_invalid = "%s is invalid, please input again.\n";//"%s��Ч������������!\n";
var msg_check_invalid = "%s contains invalid characters.\n";//"%s�����Ƿ��ַ�\n";
var msg_valid_range = "%s is invalid, the valid scope ranges from %s to %s.\n";//"%s��Χ�쳣. ��Ч�ı仯��Χ�Ǵ� %s �� %s!\n";
var msg_first = "First";  // eg. First field of GW must match device IP
var msg_invalid_mac = "%s is invalid. A MAC address must be 12 Hex chars with optional delimiters (: or -)\n";
var msg_multi_mac="The MAC address can't be multicast address.\n";
var msg_invalid_ip = "IP is invalid, please input again.\n";//"IP��ַ���Ϸ�, ����������.\n";
var msg_invalid_gw =  "Invalid Gateway, please enter again.\n";
var msg_invalid_mask = "Invalid Subnet Mask, please enter again.\n";
var msg_nameNULL = "The name can not be blank.\n";
var msg_invalid_email = "%s is invalid.\n";//"%s��Ч.\n";
var msg_invalid_host = "the domain named %s is invalid.\n";//"%s������Ч.\n";
var msg_invalid_input = "%s must be consisted by letters,numbers or chinese, and can not more than 32 bytes.\n";//"%sֻ����Ϊ32���ֽ�Ӣ�ģ����ֺͺ��ֵĻ��(����Ϊ˫�ֽ�)!\n";
var msg_invalid_num = "%s must be consisted by letters or numbers, and can not more than 16 bytes.\n";//"%sֻ����Ϊ16���ֽ�Ӣ�ģ����ֵĻ��!\n";
var msg_invalid_oid = "%s format is illegal or contains illegal characters.\n";

//reboot
var msg_no_ip = "The device can't get IP in 20 seconds, please checking whether the DHCP server exists or not.\n";//"�豸20�����޷����IP��ַ�������������Ƿ����DHCP������!";

//config
var msg_reboot = "All the network will be interrupted, do you want to continue?\n";//"���е��������Ӽ������ж�.\n\n�Ƿ����?";
var msg_nofile = "No file are chosen, please choose the right file.\n";//"û��ѡ���ļ�. ��ѡ����ȷ���ļ�.\n";
var msg_errfiletype = "The file type is incorrect. Please select the correct file.\n";//"�ļ����Ͳ���ȷ. ��ѡ����ȷ���ļ�.\n";
//var msg_null_filename = "�ļ�������Ϊ��.\n";
var msg_confirmCfile = "WARNING!\nThis operation will cover the old configure, do you want to continue?\n";//"����!\n�ϴ������ļ���������ǰ�����ñ�����.\n��ȷ���Ƿ���иò���?";
var msg_confirmDefault = "WARNING!\nThis operation will cover the old configure, if you donot choose \"Retain The Current Configuration of IP\" then the default IP will become %s.\nDo you want to continue?\n";//"����!\n�ָ����������ļ���������ǰ�����ñ�����.\n�������õ�Ĭ��IP��ַ��\"192.168.16.253\".\n��ȷ���Ƿ���иò���?";
var msg_confirmUpgrade = "WARNING!\nDo not turn off the power or the link between host and device.\nThe device will reboot after upgrading.\nDo you want to continue?\n";//"����!\n�̼����������������ж��豸��Դ�����жϺ��豸֮�����������.\n ������ɺ��豸������.\n��ȷ���Ƿ���иò���?";

//ip.html
var msg_ip = "IP Address";//"IP��ַ";
var msg_mask = "Subnet Mask";//"��������";
var msg_gw = "Default Gateway";//"Ĭ������";
var msg_dns = "DNS";
var msg_dns_warning = "WARNING!\nDNS is blank, the functions that use the DNS may not be valid.\n";//;"����: DNS��ַΪ�գ�ĳЩ��Ҫ��������Ĺ��ܽ��޷�ʹ��!\n";
var msg_ip_gw_mismatch = "%s and %s are not in a segment of net, please input again.\n";//"IP��ַ%s������%s����ͬһ����, ����������!\n";

//user
var msg_name = "user name";//"�û���";
var msg_Passwd = "password";
var msg_ConfirmPasswd = "passwords";
var msg_nosame_Passwd = "password and passwords are different,please input again.\n";
var msg_noadmin_Passwd = "The manager's name and password can't be blank.\n";//"����Ա���û��������벻��Ϊ��!\n";
var msg_user_name = "%s must be consisted by letters, numbers, underline or space, and can not more than 16 bytes.\n";//"%sֻ����Ϊ16���ֽ�Ӣ�ģ����֣��»��ߺͿո�Ļ��!\n";
var msg_user_password="The password must consist of letters, numbers or special characters, and can not be less than 5 bytes!\n";//"�û�������벻����5λ����ֻ��Ϊ���֣���ĸ�������ַ������!\n";
var msg_relogin = "The device detects the current user name has been changed, please sign in again after this operation.\n";//"ϵͳ��⵽��ǰ��¼�û����Ѹ��ģ�������ɺ������µ�¼.";
var msg_samename = "The device detects the current user name has been used, please input other username.\n ";//"ϵͳ��⵽��ǰ��¼�û����Ѿ�ʹ�ã����������ã�\n"
var msg_nousername = "The username and password can't be blank.\n";//"�û��������벻����Ϊ��!\n";
//system
var msg_device_name = "Device Name";//"�豸����";
var msg_device_sn = "Device SN";//"�豸���";
var msg_device_desp = "Device Description";//"�豸����";
var msg_device_loc = "Device Location";//"�豸λ��";
var msg_device_cont = "Contact Information";//"��ϵ��Ϣ";
var msg_invalid_cont = "%s must be consisted by letters ,\'.\',\'@\', numbers or chinese,and can not more than 16 bytes.\n";//"%sֻ����Ϊ16���ֽ�Ӣ��,����,\'.\',\'@\'�ͺ��ֵĻ��(����Ϊ˫�ֽ�)!\n";

//igmp
var msg_igmp_interval = "Query interval time of IGMP.\n";//"IGMP ��ѯ���ʱ��";
var msg_igmp_age = "Survival time of group members.\n";//"���Ա����ʱ��";

//Port Mirroring
var mirror_msg = "Please do choose a mirrored port at least.\n";//"������ѡ��һ����ض˿�!\n";
var mirror_repeat = "The mirrored port and the mirror port can not be the same.\n";//"��ض˿ں;���˿ڲ�������ͬһ�˿�!\n";
var msg_mirror_port_disabled = "The mirror ports you choose has been disabled,please choose again.\n";//"��ѡ��ľ���˿��Ѿ�������, ������ѡ��!\n";
var msg_capture_port_disabled = "The mirrored ports you choose has been disabled,please choose again.\n";//"��ѡ��Ĳɼ��˿��Ѿ�������, ������ѡ��!\n";
var msg_mirror_trunk_exclusion = "The port trunking has been opened, please close it!"//"�˿ڻ�۹����ѿ���, ��رն˿ڻ�۹���!\n";
var msg_capture_port_trunk = "The ports %s is trunk ports.\n";//"�˿�%s�Ѿ�����Ϊ��۶˿ڣ�\n";
var msg_capture_port_lacp = "The ports %s is lacp ports.\n";//"�˿�%s�Ѿ�����ΪLACP�˿ڣ�\n";
var msg_mirror_disable_lacp = "The ports %s is lacp ports.\n";//"�˿�%s�Ѿ�����ΪLACP�˿ڣ�\n";

//fwd
var fwd_err_mac = "MAC is invalid, please confirm and input again.\n";//"MAC��ַ���Ϸ�����ȷ�Ϻ���������!\n";
var msg_forward_bpdu = "The reserved etheric bridge management MAC address can't be set.\n";//"��������̫���Ź���MAC��ַ����������!\n";
var msg_forward_multi = "The reserved multicast group management MAC address can't be set.\n";//"�����Ķಥ�����MAC��ַ����������!\n";
var msg_forward_host = "The MAC of this device can't be set again.\n";//"�������ͽ�������MAC��ַ����������!\n";
var msg_no_fwd_port = "Do choose a forwarding port at least.\n";//"�ಥ��ַ�б���ѡ������һ��ת���˿�!\n";

//access.html
var msg_access_first = "";//"��";
var msg_access_mod = "group address";//"���ַ����";
var msg_incorrect_ip = "IP is invalid";//"IP��ַ��Ч!\n";
var msg_repeat_ip = "IP addresses repeat.\n";//"IP��ַ�ظ�!\n";
var msg_http_access = "WEB server transmission should choose a transmission protocol at least.\n";//"WEB����������Ӧ����ѡ��һ�ִ���Э��!\n";
var msg_ip_input = "If user access control is enabled, IP can't be blank.\n";//"����������û���½����, IP��ַ����Ϊ��!\n";
var msg_deny_pc = "The IP of current computer is not in the list which records the allowed devices, do you want to continue.\n";//"��ǰPC��IP���������¼�б����²��ܷ��ʸý�����, �Ƿ����?";
var msg_not_samemask = "Invalid IP.The access IP and switch IP is not under the same gateway.";

// email.htm
var msg_mail_server = "email server address";//"�ʼ���������ַ";
var msg_mail_user = "email account";//"�ʼ��ʺ�";
var msg_mail_passwd = "email password";//"�ʼ��ʺ�����";
var msg_email_in = "email receiver address";//"�ռ��˵�ַ";
var msg_email_re = "email response address";//"�ظ���ַ"

//alarm.htm
var port_alarm_msg = "Please choose a monitored port at least.\n";

// Diagnostics.htm
var msg_ping_addr = "the destination address";//"Ŀ�ĵ�ַ";
var msg_ping_size = "the message size";//"���Ĵ�С";
var msg_ping_number = "the message number";//"������Ŀ";
var msg_ping_interval = "the message interval";//"���ļ��";
var msg_ping_timeout = "response timeout";//"Ӧ��ʱ";
var msg_invalid_ipaddr = "%s is invalid, please input again.\n";//"%sIP��ַ���Ϸ�, ����������.\n";
var msg_invalid_domain = "%s is invalid, please input again.\n";//"%s�������Ϸ�, ����������.\n";

//trunk
var msg_trunking_least = "Trunk group %s needs 2 ports at least.\n";//"��%s��������������Ҫ2���˿�!\n";
var msg_trunking_most = "Trunk group %s can't exceed %s ports.\n";//"��%s�����������������%s���˿�!\n";
var msg_trunking_port_disabled = "In trunk group %s, trunk ports have been disabled.\n";//"�ڵ�%sTRUNK�˿����У���TRUNK�˿��Ѿ�������!\n";
var msg_trunking_port = "The same port choosed between group %s and group %s.\n";
var msg_trunking_port_ring="In trunk group \%s,trunk ports have been used for ring.\n";
var msg_trunking_port_rstp="In trunk group \%s,trunk ports have been used for rstp.\n";
var msg_trunking_port_edit="In trunk group \%s,trunk ports do not stay the same!\n";
var msg_trunking_port_erps="In trunk group \%s,trunk ports have been used for erps.\n";
var msg_trunking_port_loopback="In trunk group \%s,trunk ports have been used for loopback detection.\n";
var msg_trunking_port_inconformity="In trunk group \%s,the types of trunk ports are inconsistent!\n";//�ڻ����\%s�У���TRUNK�˿ڵĶ˿�����δ������ȫһ�£��޷����л��!;
var msg_trunk_mirror_exclusion = "The port mirror has been opened, please close it!\n"//"�˿ھ������ѿ���, ��رն˿ھ�����!\n";
var msg_trunk_qvlan_exclusion = "VLAN function is turned on, please turn it off!\n";//"802.1Q vlan�����ѿ���, ��ر�802.1Q vlan����!\n";
var msg_trunk_default_pvlan_exclusion = "Port VLAN is not default configuration, please restore to the default configuration!\n";//"�˿�vlan��Ĭ������, �����ö˿�vlanΪĬ��ֵ!\n";
var msg_trunking_port_disable_lacp = "In trunk group %s,ports %s is already used as a lacp ports!\n;"//"�����%s�ж˿�G%s�ѱ���ΪLACP�˿�\n";
var msg_trunking_disable_lacp = "Group id %s has already been used to lacp\n!";//"�����%s�ѱ�LACPʹ��\n!";
//protect port
var msg_protect_port = "The protected ports need 2 ports at least.\n";//"�������Ķ˿�������Ҫ����2���˿�!\n";

//SNMP
var msg_snmpdevice_name = "SNMP device name";//"SNMP�豸����";
var msg_snmp_get_comm = "SNMP read-only entry";//"SNMPֻ��ͨ���ַ���";
var msg_snmp_set_comm = "SNMP read-write entry";//"SNMP��дͨ���ַ���";
var msg_invalid_snmp_trap = "SNMP trap gateway is not valid.\n";//"SNMP TRAP�������ز�����ЧIP��ַ!\n";
var msg_snmp_view_nme = "View name";
var msg_snmp_view_oid = "OID";
var msg_snmp_comm_name = "Community name";
var msg_snmp_user_name = "User name";
var msg_snmp_user_authpasswd = "Authentication password";
var msg_snmp_trap_ip = "trap gateway IP addr";

//rstp
var rstp_hello_time = "RSTP polling interval";//"RSTP��ѯʱ��";
var rstp_forward_delay = "RSTP forwarding delay";//"RSTPת���ӳ�";
var rstp_max_age = "RSTP max aging time";//"RSTP����Ĺ���ʱ��";
var rstp_delay_max_age = "In RSTP: 2 * (forwarding delay - 1.0) >= RSTP max aging time\n";//"RSTP��: 2 *��ת���ӳ� - 1.0) >= ����Ĺ���ʱ��";
var rstp_max_age_hello = "In RSTP: RSTP max aging time >= 2 * (polling interval + 1.0)";//"RSTP��: ����Ĺ���ʱ�� >= 2 *����ѯʱ�� + 1.0)";
var rstp_port_cost = "path cost";//"·������";
var rstp_port_war = "port %s";//"��%s�˿�";
var rstp_port_trunk = "In RSTP,ports %s is already used as a trunk ports!\n";//"��RSTP�У��˿� %s �Ѿ�����ΪTRUNK�˿�!\n";
var rstp_port_loopback = "port %s has set loopback detection enable!\n";//"�˿�%s�����˶˿ڻ��ؼ�⹦�ܣ�\n";
var rstp_port_lacp = "port %s has set lacp enable!\n";//"�˿�%s�Ѿ�����ΪLACP�˿ڣ�\n";
//VLAN
var msg_pvlan_name = "the name of port vlan";//"�˿�VLAN����";
var msg_qvlan_index = "802.1Q VID";
var msg_qvlan_pvid = "802.1Q PVID";//"802.1Q �˿�VLAN ID";
var msg_qvlan_drop_port = "All ports drop the frames without vlan tag, the device may not work normally.\n";//"���Ѿ������е�ͨѶ�˿�ѡ���˶�����tag��֡,�������ܻᵼ���޷��뽻����ͨѶ.\nȷ��Ҫִ�д˲�����?";
var msg_no_member = "At least two forwarding ports must be in forwarding table.\n";//"ת�������б���ѡ����������ת���˿�!\n";
var msg_pvlan_max_member = "port vlan can't exceed 32 items.\n";//"�˿�VLAN����������32������!\n";
var msg_qvlan_max_member = "802.1Q VLAN can't exceed 64 items.\n";//"802.1Q VLAN����������64������!\n";
var msg_valn_fwd_member = "ports %s are not in one forwarding rule.\n";//"�˿�%sû�б����ŵ�ĳ��ת��������!\n";
var msg_valn_warning = "in port %s";//"�˿�%s��";
var msg_vlan_port_alluse = "All ports are in forwarding rule.\n";//"���ж˿ڶ��Ѿ������ŵ�ת��������!";
var msg_qvlan_pvid = "802.1Q PVID must meet this condition: 1 <= VID <= 4094.\n";//"802.1Q �˿�VLAN ID��������������1<=VID<=4094!\n";
var msg_vtrunk_vlan = "VLAN list can't be blank.\n";//"VLAN�б���Ϊ��!\n";
var msg_vtrunk_vid_error = "Please input the right VID scope";//"��������ȷ�� VLAN ID ��Χ!\n";
var msg_vtrunk_vlist_null = "VLAN Trunk list can't be blank.\n";//"VLAN Trunk�б�Ϊ��!\n";
var msg_vtrunk_del_dou = "Can't comma in the front or in the tail of VLAN list.\n";//"VLAN �б��� ��ʼ����ĩβ�����ж���!\n";
var msg_vtrunk_port_null = "Please choose one VLAN Trunk port at least.\n";//"������ѡ��һ��VLAN Trunk�˿�!\n";
var msg_vtrunk_mport_null = "Please choose one vlan manage port at least.\n";//"������ѡ��һ��VLAN ����˿�!\n";
var msg_vtrunk_port_error = "One VLAN Trunk port and manage port are the same.\n";//"VLAN Trunk�˿������˿����ص�!\n";
var msg_vlan_choose_port = "Please choose vlan port.\n";//"��ѡ�񻮷�VLAN�Ķ˿ڣ�";
var msg_vtrunk_port_repeat = "Check VLAN List is repeat Please input again.\n";//"����802.1Q��VLAN,һ���˿�ֻ�ܶ�Ӧһ��VLAN";
var msg_vtrunk_manager_port_disabled = "vlan trunk manage port has been disabled.\n";//"VLAN TRUNK����˿��Ѿ�������!\n";
var msg_vtrunk_port_disabled = "vlan trunk ports have been disabled.\n";//"����ѡ���VLAN TRUNK�˿��Ѿ�������!\n";
var msg_vlan_adv_enable = "If 802.1q vlan advanced is enabled, you computer may not connect the switch. \n Are you sure to do this?";
var msg_vlan_mode_pvid_error = "In ACCESS mode��Port\%s PVID invalid��must in VLAN list!\n";
var msg_enable_vlan_exclusion_trunk = "The trunk function has been turned on, please turn it off!\n";//"��۹����ѿ�������ر�!\n";

//VLAN Hybrid
var msg_vlan_access_error="Port %s is Access mode,only one vlan can pass,range:1~4094.\n";//"�˿�%s��Access�˿�,������ͨ����VLAN����ֻ��һ��,��ΧΪ1~4094!\n";
var msg_vlan_pvid_error="The PVID of port %s is error,PVID range:1~4094,only one of the allowed forward vlan can pass!\n";//"�˿�%s��PVID����,PVIDȡֵ��ΧΪ1~4094,��ֻ��Ϊ�˿�����ͨ����VLAN�е�һ��!\n";
var msg_vlan_allow_error="The value of port %s's 'Allowed Forward Vlan Table' is error,please configure again and vlan can't exceed %s items!\n";//"�˿�%s������ͨ����VLAN������ֵ����,�밴�ո�ʽ���������Ҳ��ܳ���64��!\n";
var msg_vlan_tag_error="The form of port %s's value is configured error in 'Transmit Vlan Untagged Table',please configure again!\n";//"\n�˿�%s�ĳ��ڲ����ǵ�VLAN������ֵ����,����������!\n";;
var msg_vlan_tag_error_hybrid="The value of port%s's  'Transmit Vlan Untagged Table' is not within the scope of the value of 'Allowed Forward Vlan Table',please configure again!\n";//var msg_vlan_tag_error_hybrid="\n�˿�%s�ĳ��ڲ����ǵ�VLAN������ֵ��������ͨ����VLAN��Χ�ڣ����������ã�\n"
var msg_vlan_manage_vlan_range_error="manage vlan";
var msg_set_manage_vlan_error = "At least one port allow manage vlan pass!";//"����Ҫ��һ���ڣ��������Vlanͨ��";
var msg_erps_enable_pvlan="ERPS is running, Port-based VLAN cannot be enable!\n";//"ERPS�����ѿ������޷��������ڶ˿ڵ�VLAN����ȷ��!\n";
var msg_erps_protocol_vlan="VLAN \%s is used as protocol vlan of ERPS, it cannot be created!\n";//"VLAN \%s ����ΪERPS��Э��VLAN���޷�������\n";
var msg_no_select_port="Port not seleceted!\n";

//ip acl
var msg_dst_port_err = "Target port number range is wrong,please re-enter.\n";
var msg_src_port_err = "Source port number range is wrong,please re-enter.\n";
var msg_l4portrange_overlap_err = "Source / Target port number range cannot overlap.\n";
var msg_l4portrange_resource_err = "For source/target port number range match, only four entrys are supported.\n";

//seep setting
var msg_speed_warning = "All ports are disabled, you may not config the device by web browser.\n";//"������һ�����ϵĶ˿ڱ������������´��޷�ͨ��Web���ý�����!\n";

//ring
var msg_ring = "Ring";
var msg_ring_id = "fast ring id";//"���ٻ�����ʶ";
var msg_double_ring = "Group %s must only have two ports.\n";//"���ٻ�����%s��˫�ۻ�Ӧ��ʹ���ҽ�ʹ�������˿�!\n";
var msg_single_ring = "Group %s must have only two ports.\n";//"���ٻ�����%s��˫�ۻ�Ӧ��ʹ���ҽ�ʹ��һ���˿�!\n";
var msg_ring_repeat = "Fast ring group %s and %s obtain the same ports.\n";//"���ٻ�����%s��%sʹ�õĶ˿��ظ�,��ȷ��!\n";
var msg_ring_id_repeat = "Group %s and %s obtain the same fast ring id.\n";//"���ٻ�����%s��%s�������ʶ�ظ�,��ȷ��!\n";
var msg_ring_repeat_id_error = "Fast ring group %s and %s obtain the same ports.,Use %s for Ring Coupling id!\n";
var msg_ring_id_error = "%s < ring id < %s.\n";//"���ٻ��������ʶӦ����%s��%s֮��!\n";
var msg_ring_port_disabled = "In group %s, some ring ports have been disabled.\n";//"�ڵ�%s�������У��л����˿��Ѿ�������!\n";
var msg_ring_trunk_port_disabled = "In 4th ring group, ring port has been disabled.\n";//"�ڵ�4�������У���϶˿��Ѿ�������!\n";
var msg_ring_trunk_collision = "ports %s can't be both ring ports and trunk ports.\n";//"%s\n����ͬʱ��Ϊ�����˿ںͻ�۶˿�!\n";
var msg_ring_port_trunk = "In ring group %s,ring ports have been used for trunk!\n";//"�ڿ��ٻ�����%s�У����п��ٻ����˿��Ѿ�����ΪTRUNK�˿�!\n";
var msg_ring_trunk_coupling = "In 4th ring group, coupling ports have been used for trunk!\n";//"�ڵ�4�������У���϶˿��Ѿ�����ΪTRUNK�˿�!\n"
var msg_ring_port_err = "The ports of ring group %s is duplicate, please recheck!\n";
var msg_ring_vlan_err = "data vlan config error,please configure again!\n";

//erps
var msg_erps_duplicate = "Ring ID used by group %s and %s is duplicate,please confirm!\n";
var msg_erps_id_error = "group %s and %s 's date vlan  duplicate but ERPS ID is not same ,please confirm!\n";
var msg_erps_vlan_duplicate = "Protocol VLAN used by group %s and %s is duplicate,please confirm!\n";
var msg_data_vlan_error = "manage vlan is not belong to any group's data vlan,please confirm!";
var msg_diff_erps_port_duplicate = "Port and ERPS ID used by group %s and %s is duplicate,please confirm!\n";
var msg_erps_port_duplicate = "East port and west port are duplicate in group %s,please confirm!\n";
var msg_erps_major_port = "In group %s, neither west port nor east port can be none when its Ring Type is Major Ring!\n";
var msg_erps_port = "In group %s, east port and west port can not be none at the same time!\n";
var msg_erps_vlan = "group %s's  protocol vlan  is duplicate with group %s's data vlan!\n";
var msg_erps_def_mac = "The configure of Destination MAC Of Protocol Frame must be the same in enabled groups!\n";
var msg_belong_major = "Group %s is configured as interconnection node, but its Belong Major does not exist, please confirm!\n";
var msg_erps_port_disabled = "In group %s, ring port has been disabled!\n";
var msg_erps_enable = "There is not any ring group enabled, please confirm!\n";
var msg_sub_belong_error = "In group %s, the Belong Major of sub ring is itself!\n";
var msg_erps_port_trunk = "In group %s, ring port has been used for trunk!\n";
var msg_vlan_type="VLAN Type is Port-based VLAN, please set VLAN Type to IEEE 802.1Q VLAN and retry!\n";//"����ERPSʱ��VLAN����������Ϊ802.1Qģʽ����ȷ�Ϻ�����!\n";
var msg_protocol_vlan="The protocol vlan of group \%s has been used, please choose a unused one!\n";//"������\%s��Э��VLAN�Ѵ�����������ѡ��δ������VLAN��ΪЭ��VLAN!\n";
var msg_erps_disable_storm = "Ring Group %s,the port with ring network has been used as the port for storm detection.\n";//"������%s�У��л����˿��Ѿ�����Ϊ�籩���˿ڣ�\n";
var msg_erps_disable_rstp = "The RSTP is running and ERPS cannot be started!\n";//"RSTP�����������У��޷�����ERPS��\n";
var msg_erps_disable_lacp = "Ring Group %s,the port %s with ring network has been used as the port for LACP detection.\n";//"������%s�У������˿�G%s�Ѿ�����ΪLACP�˿ڣ�\n"

//NTP
var msg_time_server = "time synchronization server address";//"ʱ��ͬ����������ַ";

//AUTH
var msg_auth_name = "authentication user name";//"��֤�û���";
var msg_auth_pass = "authentication user password";//"��֤�û�����";
var msg_auth_max_member = "IEEE 802.1X authentication can't exceed 128 users.\n";//"IEEE 802.1X ��֤����������128���û�!\n";
var msg_auth_null = "authentication database can't be blank.\n";//"��֤���ݿ��ڵ��û�����Ϊ��!\n"
var msg_reauth = "IEEE 802.1X authentication time again";//"IEEE 802.1X ������֤ʱ��";
var msg_radius = "IEEE 802.1X authentication server";//"IEEE 802.1X ��֤������";
var msg_AAA = "IEEE 802.1X billing server";//"IEEE 802.1X �Ʒѷ�����";
var msg_radius_port = "IEEE 802.1X authentication server port";//"IEEE 802.1X ��֤�������˿�";
var msg_AAA_port = "IEEE 802.1X billing server port";//"IEEE 802.1X �Ʒѷ������˿�";
var msg_invalid_key = "The sharing password of authentication server must be consisted by letters , chinese or numbers,\n and can not more than 64 bytes and fewer then 6 bytes.\n";//"��֤�������Ĺ�������ֻ����Ϊ������64���ֽ��Ҳ�С��6�ֽڵ�Ӣ�ģ����ֺͺ��ֵ����!\n";

//lock
var msg_max_mul = "Static Multicast MAC list can't exceed 512 items.\n";
var msg_max_lock = "Static unicast lock MAC list can't exceed 512 items.\n";//"��̬MAC��ַ�����ֻ��������64������!\n";
var msg_mul_lock = "Multicast or broadcast address can't join static unicast lock address table.\n";//"��̬���������ַ�����Լ���ಥ��㲥��ַ!\n";
var msg_uni_igmp = "Unicast or broadcast address can't join static multicast address table.\n";//"��̬�ಥ�����ַ�����Լ��뵥����㲥��ַ\n";
var msg_mac_ob = "Multicast address exceed the range.\n";//"�鲥��ַ������Χ\n";

//storm
var msg_storm_pkts = "Please choose a strict kind at least.\n";//"������ѡ��һ����������!\n";

//mac.html
var msg_oidtime_error = "MAC old time value range from %s to %s";
var msg_oidtime_numerror = "please input correct interger!";
//speed
var msg_speed_disable_ring = "The ports you disabled are ring ports.\n";//"�������õĶ˿�Ŀǰ������Ϊ�����˿�\n";
var msg_speed_disable_vlantrunk = "The ports you disabled are vlan trunk ports.\n";//"�������õĶ˿�Ŀǰ������ΪVLAN TRUNK�˿�!\n";
var msg_speed_disable_vlantrunk_manager = "The port you disabled are vlan trunk management port";//"�������õĶ˿�Ŀǰ������ΪVLAN TRUNK���ܵĹ���˿�!\n";
var msg_speed_disable_trunk = "The port you disabled are trunk port.\n";//"�������õĶ˿�Ŀǰ������ΪTRUNK�˿�!\n";
var msg_speed_disable_mirror = "The port you disabled are mirror port.\n";//"�������õĶ˿�Ŀǰ������Ϊ����˿�!\n";
var msg_speed_disable_mirror_capture = "The port you disabled are capture port.\n";//"�������õĶ˿�Ŀǰ������Ϊ�ɼ��˿�!\n";
var msg_speed_disable_tail = "Please close the functions of these ports which are disabled.\n";//"���ȹر���Щ�˿�����ʹ�õĹ���!\n";
var msg_speed_edit_trunk_="The port you edit are trunk port.\n";
var msg_speed_disable_lacp = "The ports %s you disabled are lacp ports.\n";//"�������õĶ˿�Ŀǰ������ΪLACP�˿�\n";


var msg_upgrade_status = "Upgrading,upgraded(%s/3)file,Do not cut power or operate the switch,need 1 to 2 minutes to upgraded complete.";
var msg_set_for_reboot = "Operate succeed, Now Rebooting...";
//copyright
var msg_copyright = "Copyright&copy;All Rights Reserved&nbsp;2012-2022&nbsp;";

//lacp
var msg_lacp_disable_trunk = "LACP can't be turned on at the same time as port aggregation, so the port aggregation function should be turned off first.!\n";//"LACP������˿ڻ��ͬʱ���������ȹرն˿ڻ�۹��ܣ�\n";
var msg_lacp_disable_trunk_group = "Group id %s has already been used!\n";//"�����%s�ѱ�ʹ��\n!";
var msg_lacp_duplicate_trunk_group = "lacp id  %s and %s Group id is duplicate!\n"; //���%d��%d�Ļ�����ظ�
var msg_lacp_disable_lacp_group = "The port %s trunk group ID %s is disable\n";//"�˿�G%s�Ļ����ID%sδ����\n";
var msg_lacp_disable_speed = "The port %s has been disabled\n";//"�˿�G%s������\n";
var msg_lacp_disable_rstp = "The port %s is rstp port\n";//"�˿�G%s�Ѿ�����ΪRSTP�˿�\n";
var msg_lacp_disable_erps = "The port %s is erps port\n";//"�˿�G%s�Ѿ�����ΪERPS�˿�\n";
var msg_lacp_disable_trunk_port = "The port %s is trunk port\n";//"�˿�G%s�Ѿ�����ΪTRUNK�˿�\n";
var msg_lacp_disable_mirror = "The port %s is capture port\n";//"�˿�G%s�Ѿ�����Ϊ����˿�\n";
